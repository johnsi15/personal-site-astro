import { seoStages, seoTaskIds } from '../data/seo-playbook'
import { emptyNotebook, MAX_BACKUP_BYTES, nextStage, normalizeProjectUrl, NOTEBOOK_KEY, parseNotebook, type SeoNotebook } from './seo-notebook'

const element = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T
const all = <T extends HTMLElement = HTMLElement>(selector: string) => [...document.querySelectorAll<T>(selector)]
const select = element<HTMLSelectElement>('project-select')
const status = element('save-status')
const error = element('notebook-error')
const dialog = element<HTMLDialogElement>('project-dialog')
const nameInput = element<HTMLInputElement>('project-name')
const urlInput = element<HTMLInputElement>('project-url')
let notebook: SeoNotebook = emptyNotebook()
let storageBlocked = false
let unreadableStorage = false
let unsavedChanges = false
let editing = false

function report(message: string) {
  error.textContent = message
  error.hidden = false
}

try {
  const stored = localStorage.getItem(NOTEBOOK_KEY)
  if (stored) notebook = parseNotebook(JSON.parse(stored))
} catch {
  storageBlocked = true
  unreadableStorage = true
  report('No se pudo leer el guardado local. No lo sobrescribiremos. Puedes seguir leyendo e importar un respaldo válido para recuperarlo. Si el navegador bloquea el almacenamiento, habilítalo primero.')
}

function persist() {
  if (storageBlocked) return false
  try {
    localStorage.setItem(NOTEBOOK_KEY, JSON.stringify(notebook))
    unsavedChanges = false
    status.textContent = `Guardado en este navegador · ${new Date().toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}`
    error.hidden = true
    return true
  } catch {
    unsavedChanges = true
    status.textContent = 'Sin guardar · exporta un respaldo'
    report('No se pudo guardar: almacenamiento lleno o bloqueado. Los cambios siguen en esta pestaña; exporta el JSON antes de cerrarla. No hay sincronización con el servidor.')
    return false
  }
}

const activeProject = () => notebook.projects.find(project => project.id === notebook.activeId)

function updateProgress() {
  const project = activeProject()
  const completed = project?.completed.length ?? 0
  element('progress-title').textContent = project?.name ?? 'Primero, elige un proyecto.'
  element('project-description').textContent = project ? (project.url || 'Proyecto local · puedes añadir la web desde Editar') : 'Puedes leer toda la guía sin crear uno.'
  element('progress-percent').textContent = String(Math.round(completed / seoTaskIds.length * 100))
  element<HTMLProgressElement>('overall-progress').value = completed
  element('progress-caption').textContent = `${completed} de ${seoTaskIds.length} tareas · tu avance no es una puntuación SEO`
  const next = nextStage(project)
  const link = element<HTMLAnchorElement>('next-action')
  link.href = next ? `#${next.id}` : '#revision'
  link.textContent = next ? `${project ? 'Siguiente' : 'Comenzar'}: ${next.title} ↗` : 'Checklist revisado · planifica tu próxima revisión ↗'
  for (const stage of seoStages) {
    const count = stage.tasks.filter(task => project?.completed.includes(`${stage.id}:${task.id}`)).length
    document.querySelector(`[data-stage-count="${stage.id}"]`)!.textContent = `${count}/3`
    document.querySelector(`[data-stage-nav="${stage.id}"] .nav-complete`)!.toggleAttribute('hidden', count !== 3)
    document.querySelector(`[data-stage="${stage.id}"]`)!.classList.toggle('is-complete', count === 3)
  }
}

function render() {
  const project = activeProject()
  select.replaceChildren(new Option('Sin proyecto · modo lectura', ''))
  for (const p of notebook.projects) select.add(new Option(p.name, p.id))
  select.value = notebook.activeId ?? ''
  element<HTMLButtonElement>('edit-project').disabled = !project || storageBlocked
  for (const input of all<HTMLInputElement>('[data-task]')) {
    input.disabled = !project || storageBlocked
    input.checked = project?.completed.includes(input.dataset.task!) ?? false
  }
  for (const textarea of all<HTMLTextAreaElement>('[data-notes]')) {
    textarea.disabled = !project || storageBlocked
    textarea.value = project?.notes[textarea.dataset.notes!] ?? ''
    textarea.placeholder = project ? 'Guarda hallazgos, URLs, evidencias y tu siguiente acción…' : 'Crea un proyecto para guardar hallazgos, URLs, evidencias y tu siguiente acción…'
  }
  for (const button of all<HTMLButtonElement>('[data-template], [data-favorite]')) button.disabled = !project || storageBlocked
  for (const button of all<HTMLButtonElement>('[data-new-project]')) button.disabled = storageBlocked
  for (const button of all<HTMLButtonElement>('[data-favorite]')) {
    const saved = project?.favorites.includes(button.dataset.favorite!) ?? false
    button.setAttribute('aria-pressed', String(saved))
    button.textContent = saved ? '★' : '☆'
  }
  if (!project && !storageBlocked) status.textContent = 'Modo lectura · crea un proyecto para guardar tu avance'
  if (project && status.textContent?.startsWith('Modo lectura')) status.textContent = 'Proyecto cargado · guardado en este navegador'
  updateProgress()
  filterTools()
}

select.addEventListener('change', () => {
  notebook.activeId = select.value || null
  persist()
  render()
})

for (const input of all<HTMLInputElement>('[data-task]')) input.addEventListener('change', () => {
  const project = activeProject()
  if (!project) return
  project.completed = project.completed.filter(id => id !== input.dataset.task)
  if (input.checked) project.completed.push(input.dataset.task!)
  persist()
  updateProgress()
})

for (const textarea of all<HTMLTextAreaElement>('[data-notes]')) textarea.addEventListener('input', () => {
  const project = activeProject()
  if (!project) return
  project.notes[textarea.dataset.notes!] = textarea.value
  persist()
})

for (const button of all<HTMLButtonElement>('[data-template]')) button.addEventListener('click', () => {
  const project = activeProject()
  const stage = seoStages.find(item => item.id === button.dataset.template)
  if (!project || !stage) return
  const textarea = element<HTMLTextAreaElement>(`notes-${stage.id}`)
  const value = `${textarea.value}${textarea.value ? '\n\n' : ''}${stage.template}`
  if (value.length > 20000) return report('No queda espacio para insertar la plantilla. El límite es de 20.000 caracteres por etapa.')
  project.notes[stage.id] = value
  textarea.value = value
  persist()
  textarea.focus()
})

function openProject(edit: boolean) {
  if (!edit && notebook.projects.length >= 40) return report('Has llegado al límite de 40 proyectos. Exporta un respaldo antes de eliminar alguno.')
  editing = edit
  const project = edit ? activeProject() : undefined
  nameInput.value = project?.name ?? ''
  urlInput.value = project?.url ?? ''
  element('dialog-title').textContent = edit ? 'Tu proyecto, en contexto.' : 'Un proyecto, un punto de partida.'
  element('delete-project').hidden = !edit
  element('project-form-error').hidden = true
  dialog.showModal()
  nameInput.focus()
}
for (const button of all('[data-new-project]')) button.addEventListener('click', () => openProject(false))
element('edit-project').addEventListener('click', () => openProject(true))
element('close-dialog').addEventListener('click', () => dialog.close())
element<HTMLFormElement>('project-form').addEventListener('submit', event => {
  event.preventDefault()
  try {
    const name = nameInput.value.trim()
    if (!name) throw new Error('Escribe un nombre para identificar el proyecto.')
    const url = normalizeProjectUrl(urlInput.value)
    if (editing) {
      const project = activeProject()!
      project.name = name
      project.url = url
    } else {
      const id = crypto.randomUUID()
      notebook.projects.push({ id, name, url, completed: [], notes: {}, favorites: [] })
      notebook.activeId = id
    }
    persist()
    render()
    dialog.close()
  } catch (cause) {
    const formError = element('project-form-error')
    formError.textContent = cause instanceof Error ? cause.message : 'Revisa los datos del proyecto.'
    formError.hidden = false
  }
})
element('delete-project').addEventListener('click', () => {
  const project = activeProject()
  if (!project || !confirm(`¿Eliminar “${project.name}” y todos sus apuntes y tareas? No se puede deshacer. Exporta primero si necesitas conservarlos.`)) return
  notebook.projects = notebook.projects.filter(item => item.id !== project.id)
  notebook.activeId = notebook.projects[0]?.id ?? null
  persist()
  render()
  dialog.close()
})

element('export-notebook').addEventListener('click', () => {
  if (unreadableStorage) return report('El guardado original no pudo leerse. Importa un respaldo válido; no exportaremos un cuaderno vacío que pueda confundirse con tus datos originales.')
  const blob = new Blob([JSON.stringify(notebook)], { type: 'application/json' })
  if (blob.size > MAX_BACKUP_BYTES) return report('El cuaderno supera el tamaño máximo de respaldo (64 MB). Reduce apuntes extensos antes de exportar.')
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `seo-fieldnotes-${new Date().toISOString().slice(0, 10)}.json`
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
  status.textContent = 'Respaldo preparado · comprueba que se descargó el archivo JSON'
})

const fileInput = element<HTMLInputElement>('import-file')
element('import-notebook').addEventListener('click', () => fileInput.click())
fileInput.addEventListener('change', async () => {
  const file = fileInput.files?.[0]
  if (!file) return
  try {
    if (file.size > MAX_BACKUP_BYTES) throw new Error('El archivo supera el máximo de 64 MB. No se ha cambiado tu cuaderno.')
    const imported = parseNotebook(JSON.parse(await file.text()))
    if (!confirm(`Se importarán ${imported.projects.length} proyectos. Esto REEMPLAZA todo el cuaderno local, no lo combina. Exporta antes si quieres conservarlo. ¿Continuar?`)) return
    // Only replace the current in-memory state after the validated backup is persisted.
    localStorage.setItem(NOTEBOOK_KEY, JSON.stringify(imported))
    notebook = imported
    storageBlocked = false
    unreadableStorage = false
    unsavedChanges = false
    error.hidden = true
    render()
    status.textContent = 'Respaldo importado y guardado en este navegador'
  } catch (cause) {
    report(cause instanceof SyntaxError ? 'No se pudo leer el JSON. Tu cuaderno no ha cambiado.' : `${cause instanceof Error ? cause.message : 'No se pudo importar.'} No se ha reemplazado el cuaderno.`)
  } finally { fileInput.value = '' }
})

function filterTools() {
  const query = element<HTMLInputElement>('tool-search').value.trim().toLocaleLowerCase('es')
  const category = element<HTMLSelectElement>('tool-category').value
  const access = element<HTMLSelectElement>('tool-access').value
  const favoritesOnly = element<HTMLInputElement>('favorites-only').checked
  const project = activeProject()
  let count = 0
  for (const card of all('[data-tool]')) {
    const visible = (!query || card.dataset.search!.toLocaleLowerCase('es').includes(query)) && (!category || card.dataset.category === category) && (!access || (access === 'free' ? ['Gratis', 'Freemium'].includes(card.dataset.access!) : card.dataset.access === access)) && (!favoritesOnly || project?.favorites.includes(card.dataset.tool!))
    card.hidden = !visible
    if (visible) count++
  }
  element('tools-empty').hidden = count > 0
  element('tool-results').textContent = `${count} herramientas${favoritesOnly && !project ? ' · crea un proyecto para guardar favoritas' : ' · planes y límites pueden cambiar'}`
}
for (const id of ['tool-search', 'tool-category', 'tool-access', 'favorites-only']) element(id).addEventListener('input', filterTools)
for (const button of all<HTMLButtonElement>('[data-favorite]')) button.addEventListener('click', () => {
  const project = activeProject()
  if (!project) return
  const id = button.dataset.favorite!
  const saved = project.favorites.includes(id)
  project.favorites = saved ? project.favorites.filter(item => item !== id) : [...project.favorites, id]
  button.textContent = saved ? '☆' : '★'
  button.setAttribute('aria-pressed', String(!saved))
  persist()
  filterTools()
})

function revealHash() {
  const target = document.getElementById(location.hash.slice(1))
  if (target instanceof HTMLDetailsElement) target.open = true
  if (target?.matches('[data-tool]') && target.hidden) {
    element<HTMLInputElement>('tool-search').value = ''
    element<HTMLSelectElement>('tool-category').value = ''
    element<HTMLSelectElement>('tool-access').value = ''
    element<HTMLInputElement>('favorites-only').checked = false
    filterTools()
  }
  if (target) requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }))
  for (const link of all<HTMLAnchorElement>('[data-stage-nav]')) {
    if (link.hash === location.hash) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  }
}
window.addEventListener('hashchange', revealHash)
document.addEventListener('click', event => {
  const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
  if (link && link.hash === location.hash) revealHash()
})

function updateThemeLabel() {
  const light = document.documentElement.dataset.notebookTheme === 'light'
  element('theme-toggle').setAttribute('aria-label', `Cambiar a tema ${light ? 'oscuro' : 'claro'}`)
  element('theme-toggle').textContent = `${light ? '☾' : '☼'} Tema ${light ? 'oscuro' : 'claro'}`
}
element('theme-toggle').addEventListener('click', () => {
  const theme = document.documentElement.dataset.notebookTheme === 'light' ? 'dark' : 'light'
  document.documentElement.dataset.notebookTheme = theme
  try { localStorage.setItem('seo-fieldnotes:theme', theme) } catch { report('El tema se cambió, pero no se pudo guardar tu preferencia.') }
  updateThemeLabel()
})

// Do not silently overwrite edits made in another tab.
window.addEventListener('storage', event => {
  if (event.key !== NOTEBOOK_KEY) return
  storageBlocked = true
  report('El cuaderno cambió en otra pestaña. Para evitar sobrescribirlo, se ha pausado la edición aquí. Exporta si necesitas conservar lo que ves; recarga para usar la última versión guardada.')
  render()
})
window.addEventListener('beforeunload', event => {
  if (!unsavedChanges) return
  event.preventDefault()
  event.returnValue = ''
})
render()
updateThemeLabel()
if (location.hash) revealHash()
