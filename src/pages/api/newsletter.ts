import type { APIRoute } from 'astro'

export const prerender = false

const res = (
  body: {
    message: string
    data?: Record<string, unknown>
  },
  { status, statusText, headers }: { status?: number; statusText?: string; headers?: Record<string, string> }
) => new Response(JSON.stringify(body), { status, statusText, headers })

interface FormData {
  email: string
  names: string | null
  utmSource: string | null
}

export const POST: APIRoute = async ({ request }) => {
  const url = 'https://api.brevo.com/v3/contacts'
  const apiKey = import.meta.env.API_KEY_BREVO

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData: FormData = await request.json()
    const { email, names, utmSource } = formData

    if (!email) {
      return res({ message: 'Email is required' }, { status: 400 })
    }

    const dataRegister = {
      email,
      attributes: {
        NOMBRE: names ?? 'Anónimo',
        UTM_SOURCE: utmSource ?? 'directo',
      },
      listIds: [4],
      emailBlacklisted: false,
      smsBlacklisted: false,
      updateEnabled: true,
    }

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(dataRegister),
    }

    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        return res({ message: 'Bad request' }, { status: 400, statusText: response.statusText })
      }

      if (response.status === 204) {
        return new Response(null, {
          status: 204,
          statusText: response.statusText,
          headers: { 'Content-Type': 'application/json' },
        })
      }

      const data = await response.json()
      // console.log('Respuesta:', data)

      return res({ message: 'Contact created', data }, { status: 201, headers: { 'Content-Type': 'application/json' } })
    } catch (error) {
      console.error('Error:', error)
      res({ message: 'Error create a contact brevo email' }, { status: 500 })
    }

    return res({ message: 'ok' }, { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  return res({ message: 'Error request' }, { status: 400, headers: { 'Content-Type': 'application/json' } })
}
