import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
  },
  site: 'https://johnserrano.co',
  integrations: [mdx(), sitemap(), react()],
})
