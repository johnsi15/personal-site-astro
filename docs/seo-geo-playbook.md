# Cuaderno SEO / GEO

Ruta pública e indexable: `/seo-geo`. Aparece en el sitemap de Astro y en los recursos del footer. No se ha desplegado desde esta tarea.

## Alcance

- 12 etapas y 36 tareas, con criterios de finalización, advertencias, herramientas y plantillas.
- 21 herramientas, clasificadas por tarea y acceso; no confundir freemium con pruebas temporales.
- Proyectos independientes, checklist, notas por etapa y herramientas favoritas.
- Tema oscuro inicial y selector claro/oscuro persistente, independientes del resto del sitio.
- Sin backend, login, conexión a cuentas SEO, rastreo automático ni servicios nuevos contratados.

## Guardado y respaldo

Los proyectos se guardan en `localStorage` bajo `seo-fieldnotes:v1`. El tema usa `seo-fieldnotes:theme`.

Los apuntes no se incluyen en el HTML público ni se envían al servidor por esta funcionalidad. Esto **no** es almacenamiento cifrado ni aislamiento por usuario: otras personas con acceso al mismo perfil del navegador y scripts del mismo origen pueden acceder a ellos. No guardar secretos o información sensible. El almacenamiento cambia con el origen (dominio, protocolo y puerto).

Exportar descarga un JSON versión 1 con todos los proyectos. Importar valida el archivo (máximo 64 MB, suficiente para los límites del modelo incluso con caracteres escapados), pide confirmación y **reemplaza**, no combina, el cuaderno. Límites: 40 proyectos, 80 caracteres para el nombre, 20.000 caracteres por nota de etapa. El navegador puede agotar su cuota local mucho antes: en ese caso se avisa y se puede exportar el estado en memoria. Solo acepta tareas, etapas y herramientas conocidas. Las URLs deben ser HTTP(S) y no contener credenciales.

Si el guardado falla, los cambios permanecen en memoria y se muestra un error: exportar antes de cerrar. Un guardado inicial inválido no se sobrescribe automáticamente. Cambios en otra pestaña pausan la edición para evitar sobrescrituras; recargar para usar la versión guardada.

## Mantener el contenido

- `src/data/seo-playbook.ts`: etapas, tareas, herramientas, límites, plantillas y timestamps del vídeo.
- `src/pages/seo-geo.astro`: contenido semántico generado estáticamente; se puede leer sin JavaScript.
- `src/helpers/seo-notebook.ts`: modelo y validación de respaldos.
- `src/helpers/seo-playbook-client.ts`: interacciones y persistencia.
- `src/styles/seo-playbook.css`: estilos aislados de la página.

Conservar IDs de tareas/etapas al editar textos para no invalidar respaldos existentes. Cambiar IDs requiere migración del formato de datos. Las 12 etapas actuales tienen tres tareas cada una; si cambia esa estructura, actualizar los contadores por etapa y la navegación. El total de progreso se deriva del catálogo. Los precios y cuotas deben revisarse en la fuente del proveedor; una fecha de consulta no es garantía futura. Las referencias al vídeo se basan en los capítulos aportados, no en una transcripción.

## OpenSEO

Incluye una ficha y notas de evaluación, no una instalación. La documentación consultada el 12 de noviembre de 2026 requiere Cloudflare, R2 habilitado con método de pago y DataForSEO. Workers Free limita auditorías a unas 40 páginas; confirmar límites actuales y costes externos antes de desplegar. No hay credenciales nuevas ni variables de entorno para este cuaderno.

## Comprobaciones

```sh
# Node 22.6+ con soporte TypeScript nativo (probado con Node 24)
node --test tests/seo-notebook.test.ts
npm run build
```

Prueba manual: crear dos proyectos, marcar tareas y escribir notas distintas; recargar y alternarlos; filtrar herramientas y guardar favoritas; exportar e importar; comprobar cancelación, JSON inválido y errores de almacenamiento. Revisar móvil/escritorio, teclado y ambos temas.
