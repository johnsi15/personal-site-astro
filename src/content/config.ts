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
    // An optional frontmatter property. Very common!
    // In frontmatter, dates written without quotes around them are interpreted as Date objects
    // publishDate: z
    // 	.string()
    // 	.or(z.date())
    // 	.transform((val) => new Date(val)),
    // You can also transform a date string (e.g. "2022-07-08") to a Date object
    primaryTag: z.object({ name: z.string(), slug: z.string() }),
    publishedDate: z.string().transform(str => new Date(str)),
    // Advanced: Validate that the string is also an email
    // authorContact: z.string().email(),
    canonicalURL: z.string().url(),
  }),
})

export const collections = { blog }
