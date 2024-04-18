import type { APIRoute } from 'astro'

export const prerender = false

export const POST: APIRoute = async ({ params, request, clientAddress }) => {
  const uaString = request.headers.get('user-agent')
  // const { type } = request.body
  const { event_name, event_id, event_source_url, fbp, fbc, title, fn, em } = await request.json()
  console.log(event_name)
  // const cookie = request.headers.get('cookie')

  const data = JSON.stringify({
    data: [
      {
        event_name,
        event_time: Math.round(new Date().getTime() / 1000),
        event_id,
        event_source_url,
        action_source: 'website',
        user_data: {
          client_ip_address: clientAddress,
          client_user_agent: uaString,
          fbp,
          fbc,
          ...(fn ? { fn } : {}),
          ...(em ? { em } : {}),
        },
        ...(title
          ? {
              custom_data: {
                content_name: title,
              },
            }
          : {}),
      },
    ],
    test_event_code: 'TEST78988',
  })

  const TOKEN = import.meta.env.ACCESS_TOKEN_FB_API

  try {
    const response = await fetch(`https://graph.facebook.com/v19.0/1006748173142904/events?access_token=${TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          message: 'Error en la solicitud',
        }),
        {
          status: 400,
          statusText: 'Error connection',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    }

    const json = await response.json()
    console.log({ json })

    return new Response(
      JSON.stringify({
        message: 'ok',
        data: json,
      }),
      {
        status: 200,
        statusText: 'OK',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Error en la conexión ' + error,
      }),
      {
        status: 500,
        statusText: 'Error connection',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
