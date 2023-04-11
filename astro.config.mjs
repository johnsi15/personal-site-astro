import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import react from '@astrojs/react'

// https://astro.build/config
import vercel from '@astrojs/vercel/static'
// DOC: https://docs.astro.build/es/guides/integrations-guide/vercel/
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
  },
  site: 'https://johnserrano.co',
  integrations: [
    mdx(),
    sitemap(),
    react(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  output: 'static',
  adapter: vercel({
    analytics: true,
  }),
})
