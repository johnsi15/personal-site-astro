import { sendEventData } from '@/helpers/scriptEventFB'

window.addEventListener('load', () => {
  const title = document.querySelector('h1')?.textContent

  sendEventData({ event_name: 'ViewContent', event_id: 'view_content_id', title })
})
