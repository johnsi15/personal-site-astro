import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'
import partytown from '@astrojs/partytown'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'one-dark-pro',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  site: 'https://johnserrano.co/',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap(),
    react(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      resolveUrl: function (url, location, type) {
        console.log('Partytown resolveUrl called (Astro config) for:', url.href, 'type:', type) // Log desde Astro config
        if (
          type === 'script' &&
          url.hostname === 'www.googletagmanager.com' &&
          url.pathname.includes('/debug/bootstrap')
        ) {
          console.log('Astro config: Matched GTM debug URL for proxying:', url.href)
          const proxyUrl = new URL(`https://${location.hostname}/proxytown/gtm${url.pathname}${url.search}`)
          console.log('Astro config: Proxying GTM debug URL to:', proxyUrl.href)
          return proxyUrl
        }
        console.log('Astro config: Not proxying URL:', url.href)
        return url
      },
      config: {
        forward: ['dataLayer.push', 'fbq'],
        debug: true,
      },
    }),
    tailwind(),
  ],
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})
