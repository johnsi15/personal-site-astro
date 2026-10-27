const WHATSAPP_NUMBER = '573106029831'

const buildWhatsAppLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const WHATSAPP_DISPLAY = '+57 310 602 9831'

export const whatsappLinks = {
  home: buildWhatsAppLink('Hola John, vi tu sitio web y quiero cotizar un proyecto para mi negocio.'),
  sistemaMedida: buildWhatsAppLink('Hola John, necesito un sistema o aplicación web a medida para mi negocio. ¿Podemos revisar mi proyecto?'),
  general: buildWhatsAppLink('Hola John, vi tu página de servicios y quiero una cotización para mi negocio.'),
  sitioWeb: buildWhatsAppLink('Hola John, me interesa el servicio de Sitio Web. ¿Me das una cotización?'),
  tiendaOnline: buildWhatsAppLink('Hola John, me interesa el servicio de Tienda Online. ¿Me das una cotización?'),
  tiendaPauta: buildWhatsAppLink('Hola John, me interesa el servicio de Tienda + Pauta. ¿Me das una cotización?'),
}

export const recentWork = [
  { name: 'Amorette Kids', url: 'https://amorettekids.com/' },
  { name: 'GeeParts', url: 'https://geeparts.co/' },
  { name: 'Top Autos', url: 'https://topautos.com.co/' },
  { name: 'Malalakids', url: 'https://malalakids.com/' },
  { name: 'Catalítico', url: 'https://www.catalitico.com.co/' },
  { name: 'seocheckAI', url: 'https://seocheckai.com/' },
]
