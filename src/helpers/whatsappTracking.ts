import { sendEventData } from './sendEventData'

let initialized = false

export function initWhatsAppTracking() {
  if (initialized) return
  initialized = true

  const trackingWindow = window as typeof window & { dataLayer?: Array<Record<string, unknown>> }
  const attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
  const queryParams = new URLSearchParams(window.location.search)

  const getAttribution = () => Object.fromEntries(attributionKeys.flatMap(key => {
    let value = queryParams.get(key)
    try {
      value ||= sessionStorage.getItem(key)
    } catch {
      // Query parameters remain available when session storage is blocked.
    }
    return value ? [[key, value]] : []
  }))

  attributionKeys.forEach(key => {
    const value = queryParams.get(key)
    if (value) {
      try {
        sessionStorage.setItem(key, value)
      } catch {
        // Tracking must not interfere with opening WhatsApp.
      }
    }
  })

  document.querySelectorAll<HTMLElement>('[data-whatsapp-location]').forEach(link => {
    link.addEventListener('click', () => {
      const ctaLocation = link.dataset.whatsappLocation || 'unknown'
      const serviceName = link.dataset.whatsappService || 'general'
      const eventId = `whatsapp_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`

      trackingWindow.dataLayer = trackingWindow.dataLayer || []
      trackingWindow.dataLayer.push({
        event: 'whatsapp_click',
        ga4_event_name: 'generate_lead',
        contact_method: 'whatsapp',
        cta_location: ctaLocation,
        service_name: serviceName,
        page_path: window.location.pathname,
        event_id: eventId,
        ...getAttribution(),
      })

      try {
        sendEventData({ event_name: 'Contact', event_id: eventId, title: `WhatsApp · ${serviceName} · ${ctaLocation}` })
      } catch {
        // Browser storage restrictions can also affect the Meta helper.
      }
    })
  })
}
