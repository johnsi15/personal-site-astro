import { sendEventData } from './sendEventData'

window.addEventListener('load', () => {
  sendEventData({ event_name: 'PageView', event_id: 'page_view_id' })
})
