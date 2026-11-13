import { seoStages, seoTaskIds, seoTools } from '../data/seo-playbook.ts'

export const NOTEBOOK_KEY = 'seo-fieldnotes:v1'
// Covers a full notebook at its per-field limits, even with JSON-escaped text.
export const MAX_BACKUP_BYTES = 64_000_000
export type SeoProject = {
  id: string
  name: string
  url: string
  completed: string[]
  notes: Record<string, string>
  favorites: string[]
}
export type SeoNotebook = { version: 1; activeId: string | null; projects: SeoProject[] }
export const emptyNotebook = (): SeoNotebook => ({ version: 1, activeId: null, projects: [] })

export function normalizeProjectUrl(value: string): string {
  if (!value.trim()) return ''
  const url = new URL(value.includes('://') ? value.trim() : `https://${value.trim()}`)
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || !url.hostname.includes('.')) {
    throw new Error('Usa una URL web válida, sin credenciales: https://ejemplo.com')
  }
  return url.href
}

export function parseNotebook(value: unknown): SeoNotebook {
  const invalid = () => { throw new Error('El archivo no es un respaldo válido de este cuaderno (versión 1).') }
  if (!value || typeof value !== 'object') return invalid()
  const data = value as Record<string, unknown>
  if (data.version !== 1 || !Array.isArray(data.projects) || data.projects.length > 40) return invalid()
  const ids = new Set<string>()
  const projects = data.projects.map((raw): SeoProject => {
    if (!raw || typeof raw !== 'object') return invalid()
    const p = raw as Record<string, unknown>
    if (typeof p.id !== 'string' || !/^[a-zA-Z0-9-]{1,80}$/.test(p.id) || ids.has(p.id)) return invalid()
    ids.add(p.id)
    if (typeof p.name !== 'string' || !p.name.trim() || p.name.length > 80 || typeof p.url !== 'string' || p.url.length > 2048) return invalid()
    let url = ''
    try { url = normalizeProjectUrl(p.url) } catch { return invalid() }
    const list = (input: unknown, allowed: string[]) => {
      if (!Array.isArray(input) || input.length > allowed.length || input.some(item => typeof item !== 'string' || !allowed.includes(item))) return invalid()
      return [...new Set(input)] as string[]
    }
    if (!p.notes || typeof p.notes !== 'object' || Array.isArray(p.notes)) return invalid()
    const notes: Record<string, string> = {}
    for (const [key, text] of Object.entries(p.notes)) {
      if (!seoStages.some(stage => stage.id === key) || typeof text !== 'string' || text.length > 20000) return invalid()
      notes[key] = text
    }
    return { id: p.id, name: p.name.trim(), url, completed: list(p.completed, seoTaskIds), notes, favorites: list(p.favorites, seoTools.map(tool => tool.id)) }
  })
  if (data.activeId !== null && (typeof data.activeId !== 'string' || !ids.has(data.activeId))) return invalid()
  return { version: 1, activeId: data.activeId as string | null, projects }
}

export function nextStage(project?: SeoProject) {
  return seoStages.find(stage => stage.tasks.some(task => !project?.completed.includes(`${stage.id}:${task.id}`)))
}
