import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { seoStages, seoTaskIds, seoTools } from '../src/data/seo-playbook.ts'
import { emptyNotebook, nextStage, normalizeProjectUrl, parseNotebook } from '../src/helpers/seo-notebook.ts'

const example = () => ({ version: 1, activeId: 'test-project', projects: [{ id: 'test-project', name: 'Mi web', url: 'https://ejemplo.com', completed: ['contexto:brief'], notes: { contexto: 'Mi contexto' }, favorites: ['gsc'] }] })

test('los IDs fijos de la página no colisionan con las anclas de las etapas', () => {
  const page = readFileSync(new URL('../src/pages/seo-geo.astro', import.meta.url), 'utf8')
  const fixedIds = [...page.matchAll(/\bid='([^']+)'/g)].map(match => match[1])
  const ids = [...fixedIds, ...seoStages.map(stage => stage.id)]
  assert.equal(new Set(ids).size, ids.length)
  assert.ok(fixedIds.includes('cuaderno-inicio'))
})

test('el catálogo tiene IDs únicos y todas las herramientas de cada etapa existen', () => {
  assert.equal(seoStages.length, 12)
  assert.equal(seoTaskIds.length, 36)
  assert.equal(new Set(seoTaskIds).size, seoTaskIds.length)
  assert.equal(new Set(seoTools.map(tool => tool.id)).size, seoTools.length)
  for (const stage of seoStages) for (const id of stage.tools) assert.ok(seoTools.some(tool => tool.id === id))
})
test('un respaldo vacío y uno completo hacen roundtrip sin perder apuntes', () => {
  assert.deepEqual(parseNotebook(emptyNotebook()), emptyNotebook())
  const parsed = parseNotebook(JSON.parse(JSON.stringify(example())))
  assert.equal(parsed.projects[0].notes.contexto, 'Mi contexto')
  assert.equal(parsed.projects[0].completed[0], 'contexto:brief')
  assert.equal(parsed.projects[0].favorites[0], 'gsc')
})
test('normaliza URLs web y rechaza protocolos peligrosos y credenciales', () => {
  assert.equal(normalizeProjectUrl('ejemplo.com'), 'https://ejemplo.com/')
  assert.equal(normalizeProjectUrl(''), '')
  for (const url of ['javascript:alert(1)', 'data:text/html,test', 'ftp://ejemplo.com', 'https://user:secret@ejemplo.com']) assert.throws(() => normalizeProjectUrl(url))
})
test('rechaza versión incompatible, activo inexistente, duplicados y objetos incompletos', () => {
  for (const value of [null, [], {}, { ...example(), version: 2 }, { ...example(), activeId: 'missing' }, { ...example(), projects: [...example().projects, ...example().projects] }]) assert.throws(() => parseNotebook(value))
})
test('rechaza tareas desconocidas, notas de etapa ajena y favoritas inexistentes', () => {
  for (const override of [{ completed: ['inventada'] }, { notes: { ajena: 'texto' } }, { favorites: ['inventada'] }, { notes: { contexto: 'a'.repeat(20001) } }, { name: 'a'.repeat(81) }]) {
    const value = example()
    Object.assign(value.projects[0], override)
    assert.throws(() => parseNotebook(value))
  }
})
test('elimina claves extra y no acepta contaminación del prototipo en notas', () => {
  const value = { ...example(), untrusted: '<script>' }
  assert.equal('untrusted' in parseNotebook(value), false)
  const polluted = example()
  polluted.projects[0].notes = JSON.parse('{"__proto__":"unsafe"}')
  assert.throws(() => parseNotebook(polluted))
})
test('siguiente acción avanza por etapas y termina solo con todas las tareas', () => {
  assert.equal(nextStage()?.id, 'contexto')
  const project = parseNotebook(example()).projects[0]
  project.completed = seoTaskIds.filter(id => id.startsWith('contexto:'))
  assert.equal(nextStage(project)?.id, 'medicion')
  project.completed = [...seoTaskIds]
  assert.equal(nextStage(project), undefined)
})
test('proyectos conservan progreso y notas independientes', () => {
  const value = example()
  value.projects.push({ ...example().projects[0], id: 'second-project', name: 'Otra web', completed: [], notes: { contexto: 'Otro contexto' }, favorites: [] })
  const parsed = parseNotebook(value)
  assert.equal(parsed.projects[0].notes.contexto, 'Mi contexto')
  assert.equal(parsed.projects[1].notes.contexto, 'Otro contexto')
  assert.equal(parsed.projects[1].completed.length, 0)
})
