import { getCollection } from 'astro:content'

export async function GET() {
  const allBlogPosts = await getCollection('blog')
  // console.log(allBlogPosts);
  const posts = allBlogPosts.map(post => {
    return { id: post.id, slug: post.id, body: post.body, ...post.data }
  })
  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' },
  })
}
