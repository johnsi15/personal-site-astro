import type { APIRoute } from 'astro'
import { getLatestYouTubeVideo } from '../../helpers/youtube.ts'

export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {
  // const video = await getLatestYouTubeVideo('UCycvOkhF14veCixjxn1em4A')

  // console.log({ video })
  return new Response(
    JSON.stringify({
      path: new URL(request.url).pathname,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}
