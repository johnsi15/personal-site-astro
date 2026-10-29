# Semana 2: servicios y sectores

## Estado de esta entrega

Seis URLs están habilitadas para indexación en el código y listas para desplegar. Solo contadores permanece como borrador público con `noindex`, fuera del sitemap y sin enlaces desde las páginas habilitadas. Esto no es control de acceso: `noindex` no impide visitar o compartir una URL.

El propietario confirmó tarifas y condiciones: desarrollo y ajustes generales a $80.000 COP/hora; sistemas, integraciones y diagnóstico técnico especializado entre $100.000 y $120.000 COP/hora, con la tarifa concreta definida en la propuesta; landing sencilla entre $600.000 y $1.200.000; tiendas desde $2.000.000; sistemas a medida como referencia desde $3.000.000, según alcance. Como referencia se publican implementaciones entre 2 y 8 semanas; los sistemas de mayor complejidad requieren un calendario específico. El plazo comienza en una fecha confirmada por escrito, una vez recibidos el anticipo del 50%, la aprobación del alcance y los insumos necesarios para la primera etapa. Los retrasos posteriores de materiales o aprobaciones pueden requerir reprogramación acordada. Se mantienen pago 50/50, hasta 5 o 10 rondas según proyecto y soporte de 1 a 2 semanas. También se incorporaron las recomendaciones aprobadas sobre rondas consolidadas, costos de alojamiento y renovación, cuentas del cliente y soporte anual delimitado por propuesta. No se prometen resultados ni se inventan ofertas en JSON-LD.

| URL | Enfoque y prueba |
| --- | --- |
| `/servicios/tienda-online` | Operación de compra; GeeParts en Tiendanube con OpenPay |
| `/servicios/pagina-web-colombia` | Presencia comercial para negocios de Colombia; Top Autos como referencia de catálogo, no de web básica |
| `/servicios/sistemas-a-medida` | Procesos, inventarios, CRM y paneles; panel real de Catalítico |
| `/servicios/tienda-shopify` | Compatibilidad, configuración y costos externos; Malalakids y Amorette Kids en Shopify, confirmado por el propietario |
| `/sectores/repuestos-y-autos` | Diferencia entre repuestos y vehículos; GeeParts y Top Autos |
| `/sectores/ropa-infantil` | Tallas, variantes y colecciones; referencias Malalakids y Amorette Kids |
| `/sectores/contadores-y-servicios-profesionales` | Confianza y alcance; propuesta sectorial sin cliente contable documentado |

Cada página tiene texto propio, enlaces relacionados, WhatsApp con mensaje contextual y FAQ visible. Se comparte la estructura visual y los datos estructurados en `src/layouts/CommercialPage.astro`; las condiciones se centralizan en `src/data/commercial-terms.ts` y el presupuesto visible en `ProjectBudget.astro`. Malalakids y Amorette no reciben atribuciones de funciones o métricas no confirmadas.

## Protección de borradores

- `src/data/commercial-pages.ts` es el registro de rutas y estado editorial.
- El layout emite `noindex, follow` para las rutas con `draft: true` y muestra un aviso de borrador.
- `astro.config.mjs` excluye esas rutas del sitemap generado.
- Home enlaza directamente a los tres servicios principales, presenta Shopify como alternativa y añade los dos sectores con referencias reales. Footer, paquetes y directorio de `/servicios` enlazan a las páginas habilitadas. Las páginas habilitadas no enlazan a contadores.
- No bloquear estas rutas en `robots.txt`: un buscador necesita poder leer el `noindex`.

## Antes de desplegar y después de publicar

1. Revisar las condiciones y precios visibles. Las suscripciones, renovación de dominio y alcance de soporte anual siguen dependiendo de cada cotización.
2. Construir y comprobar HTML, canonical, H1 único, FAQ, JSON-LD, sitemap y experiencia móvil. Probar los mensajes de WhatsApp.
3. Desplegar con el flujo habitual del repositorio. Los cambios locales no equivalen a publicación en producción.
   La antigua URL `/servicios/pagina-web-cucuta` redirige permanentemente a `/servicios/pagina-web-colombia` mediante `vercel.json` (308 en Vercel). Comprobar la redirección en producción: `astro dev` no aplica las reglas de Vercel. Solo la nueva URL debe estar en el sitemap.
4. Comprobar las seis URLs en producción, que no tengan `noindex` y que aparezcan en el sitemap. Confirmar que contadores conserva `noindex` y no aparece en el XML.
5. En Search Console, inspeccionar las URLs y solicitar indexación. Validar schema sin prometer resultados enriquecidos: FAQPage no garantiza que Google muestre un FAQ.
6. Si se decide abordar contadores, aportar un caso autorizado o aprobar explícitamente una página de oferta sin prueba sectorial. No hacen falta acreditaciones técnicas nuevas: falta evidencia comercial para el enfoque solicitado originalmente. Cambiar su estado y añadir enlaces solo después de esa decisión.

## Seguimiento SEO y GEO

Medir por URL consultas e impresiones de Search Console, entradas orgánicas y conversaciones calificadas. Mantener la distinción entre clic en WhatsApp, mensaje enviado y venta. Los botones nuevos, la home y el footer usan el helper compartido de WhatsApp y envían `whatsapp_click` a dataLayer; validar en GTM/GA4 que la etiqueta lo transforma en `generate_lead`. Ver `docs/servicios-tracking.md`.

Para GEO, registrar motor, fecha, consulta y URL citada. Separar búsquedas locales, de plataforma y de sector. No interpretar una mención aislada como posicionamiento estable. Los borradores no indexables no deben usarse para evaluar visibilidad orgánica.
