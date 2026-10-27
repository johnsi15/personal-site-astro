# Despliegue y seguimiento SEO: primeros siete días

## Cambios de esta entrega

- Se elimina la ruta antigua `src/pages/blog/[page].astro`, que generaba páginas vacías.
- En Vercel, `/blog/1`, `/blog/2` y las demás rutas con un único segmento numérico redirigen permanentemente a `/blog` (308).
- Las páginas generales usan `WebPage`, la biografía `AboutPage`, los listados de blog y etiquetas `CollectionPage` y los artículos `BlogPosting`.
- Los artículos usan `publishedDate` y, cuando existe, `updatedDate`. No se inventan fechas para las demás páginas.
- Se elimina `public/sitemap.xml`. `/sitemap.xml` redirige permanentemente al índice generado `/sitemap-index.xml` (308). `robots.txt` ya apunta al índice automático.

## Consultar el sitemap en local

`@astrojs/sitemap` genera los XML durante `npm run build`; no crea esas rutas en `npm run dev`. Un 404 en el servidor de desarrollo no indica que falte el sitemap en producción.

En esta configuración con el adaptador de Vercel, `npm run preview` no está soportado. Para inspeccionar los archivos estáticos generados, sin detener el servidor de desarrollo del puerto 4321:

```sh
npm run build
python3 -m http.server 4322 --bind 127.0.0.1 --directory dist/client
```

Abrir:

- Índice: http://127.0.0.1:4322/sitemap-index.xml
- URLs: http://127.0.0.1:4322/sitemap-0.xml

Este servidor requiere Python 3 y permite revisar archivos estáticos; no ejecuta las APIs ni las redirecciones de Vercel. Los XML conservan enlaces absolutos a `johnserrano.co` intencionalmente. Para revisar el segundo archivo localmente, usar la URL anterior en lugar del enlace de producción incluido en el índice. Detener con Ctrl+C.

## Al publicar (día 0)

Registrar la fecha y hora reales del despliegue y el commit desplegado. La semana empieza con el despliegue, no con la edición local.

1. Comprobar en producción home, `/sobre-mi`, `/servicios`, `/blog` y un artículo.
2. Comprobar las redirecciones (configuradas en Vercel; `astro dev` no aplica `vercel.json`):

   ```sh
   curl -I https://johnserrano.co/blog/1
   curl -I https://johnserrano.co/blog/2
   curl -I https://johnserrano.co/sitemap.xml
   ```

   Deben responder 308 hacia `/blog` y `/sitemap-index.xml`, respectivamente. Comprobar también un artículo real para confirmar que no redirige a `/blog`.
3. Abrir el índice del sitemap y sus archivos asociados. No deben aparecer las páginas numéricas retiradas.
4. Revisar el JSON-LD con Schema Markup Validator y un artículo con Rich Results Test. Que un schema sea válido no garantiza resultados enriquecidos.
5. En Search Console, enviar `/sitemap-index.xml`, retirar la antigua presentación de `/sitemap.xml` si existe e inspeccionar home, servicios y un artículo. Solicitar indexación de las páginas principales modificadas.
6. Exportar los siete días completos anteriores al despliegue como referencia. Usar la misma propiedad, zona horaria y filtros en la comparación.
7. Verificar una sola vez con GTM Preview y GA4 DebugView que los clics de WhatsApp de `/servicios` llegan como `generate_lead`. El código envía `whatsapp_click` a dataLayer; la etiqueta de GTM debe estar configurada y publicada. Ver `docs/servicios-tracking.md`.

## Qué medir

| Fuente | Métrica | Separación |
| --- | --- | --- |
| Search Console | Clics, impresiones, CTR y posición media | Home, servicios, blog; consultas de marca frente a consultas comerciales |
| Search Console | Estado de indexación, sitemap y errores | URLs principales y antiguas páginas numéricas |
| GA4 | Sesiones orgánicas y páginas de entrada | Home y servicios |
| GA4 | `generate_lead` validado | Página y ubicación del botón, donde existan esos parámetros |
| Registro del negocio | Conversaciones nuevas y cotizaciones reales | Canal y servicio solicitado |

Un clic de WhatsApp no demuestra que se envió un mensaje ni que hubo una venta. Los botones de home y footer no tienen el listener explícito de `/servicios`; no asumir que se miden como `generate_lead` sin verificar una regla adicional de GTM.

## Día 7

- Comparar siete días completos posteriores con los siete anteriores, esperando a que Search Console tenga datos completos. Evitar comparar días parciales.
- Registrar cambios en impresiones, clics, entradas orgánicas y consultas comerciales. Conservar los valores absolutos junto a los porcentajes.
- Revisar nuevas conversaciones y cotizaciones, además de clics.
- Confirmar que las URLs numéricas dejan de aparecer en el sitemap y comienzan a reconocerse como redirecciones. Su retirada del índice puede tardar más de una semana.
- Mantener estable el contenido comercial durante la semana para reducir cambios simultáneos.

Esta primera semana sirve para detectar fallos y establecer una referencia; puede ser insuficiente para atribuir cambios de posicionamiento a esta entrega. La revisión no queda programada automáticamente y no implica acceso conectado a Search Console o GA4.

Para observar GEO, registrar consultas fijas sobre los servicios, el motor, la fecha y si cita una URL del sitio. Es una comprobación exploratoria: las respuestas varían y siete días no permiten asegurar una tendencia ni atribución causal.
