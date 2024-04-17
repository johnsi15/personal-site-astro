interface Props {
  event_name: string
  event_id: string
  title?: string | null
}

export function sendEventData({ event_name, event_id, title = null }: Props) {
  const domain = window.location.origin
  const queryString = window.location.search

  const urlParams = new URLSearchParams(queryString)

  let creationTime: number | string | null = localStorage.getItem('_fbp_creation_time')
  let creationTimeFbc: number | string | null = localStorage.getItem('_fbc_creation_time')

  const randomNumber = new Date().getTime() + Math.floor(Math.random() * 1000)
  const fbclid = urlParams.get('fbclid')
  const hasFbclid = urlParams.has('fbclid')

  if (!creationTime) {
    creationTime = new Date().getTime()
    localStorage.setItem('_fbp_creation_time', creationTime?.toString())
  }

  if (hasFbclid && !creationTimeFbc) {
    creationTimeFbc = new Date().getTime()
    localStorage.setItem('_fbc_creation_time', creationTimeFbc?.toString())
  }

  const data = {
    event_name,
    event_id,
    event_source_url: window.location.href,
    fbp: `fb.1.${creationTime}.${randomNumber}`,
    ...(hasFbclid ? { fbc: `fb.1.${creationTimeFbc}.${fbclid}` } : {}),
    ...(title ? { title } : {}),
  }

  fetch(`${domain}/api/conversions-fb.json`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud')
      }
      return response.json()
    })
    .then(data => {
      console.log('Sended event: ', event_name, data)
    })
    .catch(error => {
      console.error('Error:', error)
    })
}
