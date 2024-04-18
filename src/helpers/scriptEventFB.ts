import { sendEventData } from "./sendEventData"

window.addEventListener('load', () => {
  const title = document.querySelector('h1')?.textContent

  sendEventData({ event_name: 'PageView', event_id: 'page_view_id' })
  sendEventData({ event_name: 'ViewContent', event_id: 'view_content_id', title })
})
