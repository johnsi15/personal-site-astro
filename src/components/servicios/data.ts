const WHATSAPP_NUMBER = '573106029831'

const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const WHATSAPP_DISPLAY = '+57 310 602 9831'

export const whatsappLinks = {
  general: buildWhatsAppLink('Hola John, vi tu página de servicios y quiero una cotización para mi negocio.'),
  sitioWeb: buildWhatsAppLink('Hola John, me interesa el servicio de Sitio Web. ¿Me das una cotización?'),
  tiendaOnline: buildWhatsAppLink('Hola John, me interesa el servicio de Tienda Online. ¿Me das una cotización?'),
  tiendaPauta: buildWhatsAppLink('Hola John, me interesa el servicio de Tienda + Pauta. ¿Me das una cotización?'),
}

export const recentWork = [
  { name: 'GeeParts', url: 'https://geeparts.co/' },
  { name: 'Top Autos', url: 'https://topautos.com.co/' },
  { name: 'Catalítico', url: 'https://www.catalitico.com.co/' },
  { name: 'HallowStick', url: 'https://hallowstick.netlify.app/' },
  { name: 'seocheckAI', url: 'https://seocheckai.com/' },
]
