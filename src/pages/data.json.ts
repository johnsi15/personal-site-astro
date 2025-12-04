import { getCollection } from 'astro:content'

export async function get({ params, request }) {
  const allBlogPosts = await getCollection('blog')
  // console.log(allBlogPosts);
  const posts = allBlogPosts.map(post => {
    return { id: post.id, slug: post.slug, body: post.body, ...post.data }
  })
  return {
    body: JSON.stringify(posts),
  }
}
