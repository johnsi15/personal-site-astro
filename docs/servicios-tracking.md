# Tracking de conversiones en /servicios

La página envía un evento a `dataLayer` cada vez que un visitante abre WhatsApp desde un CTA.

```js
{
  event: 'whatsapp_click',
  ga4_event_name: 'generate_lead',
  contact_method: 'whatsapp',
  cta_location: 'hero',
  service_name: 'general',
  page_path: '/servicios',
  event_id: 'whatsapp_...',
  utm_source: '...',
  utm_medium: '...',
  utm_campaign: '...',
  utm_content: '...',
  utm_term: '...'
}
```

Los parámetros UTM se guardan durante la sesión para conservar la atribución antes del clic.

## Google Tag Manager

Contenedor: `GTM-MKJQTJ3`.

1. Crear un trigger de tipo **Custom Event** con el nombre `whatsapp_click`.
2. Crear variables de capa de datos, versión 2:
   - `DLV - contact_method` → `contact_method`
   - `DLV - cta_location` → `cta_location`
   - `DLV - service_name` → `service_name`
   - `DLV - page_path` → `page_path`
   - `DLV - event_id` → `event_id`
   - Variables opcionales para cada `utm_*`.
3. Crear una etiqueta **Google Analytics: GA4 Event**.
4. Seleccionar la etiqueta de configuración o Google Tag existente.
5. Usar `generate_lead` como nombre del evento.
6. Añadir como parámetros del evento:
   - `method` → `{{DLV - contact_method}}`
   - `cta_location` → `{{DLV - cta_location}}`
   - `service_name` → `{{DLV - service_name}}`
   - `page_path` → `{{DLV - page_path}}`
   - `event_id` → `{{DLV - event_id}}`
   - Los parámetros `utm_*` que se quieran analizar.
7. Asociar el trigger `whatsapp_click` y publicar el contenedor.

## GA4

1. Verificar `generate_lead` en DebugView usando el modo Preview de GTM.
2. En **Admin → Events**, marcar `generate_lead` como evento clave/conversión.
3. Registrar `cta_location` y `service_name` como dimensiones personalizadas para usarlas en informes.

## Google Ads

Si se requiere atribución directa en Ads, crear una etiqueta de conversión de Google Ads usando el mismo trigger `whatsapp_click`. No debe crearse un segundo listener en la página.

## Meta

El mismo clic envía `Contact` a la API de conversiones existente (`/api/conversions-fb.json`) con el mismo `event_id`. La petición usa `keepalive` para completarse aunque el navegador abra WhatsApp inmediatamente.
