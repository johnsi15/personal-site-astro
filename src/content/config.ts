import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    // Transform string to Date object
    pubDate: z.string().transform(str => new Date(str)),
    updatedDate: z
      .string()
      .optional()
      .transform(str => (str ? new Date(str) : undefined)),
    featureImage: z.string().optional(),
    draft: z.boolean(),
    author: z.string().default('Anonymous'),
    tags: z.array(z.string()),
    primaryTag: z.object({ name: z.string(), slug: z.string() }),
    publishedDate: z.string().transform(str => new Date(str)),
    canonicalURL: z.string().url(),
  }),
})

export const collections = { blog }
