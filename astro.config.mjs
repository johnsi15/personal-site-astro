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
        console.log('Partytown resolveUrl called for:', url.href, 'type:', type) // Log al inicio de la función

        if (
          type === 'script' &&
          url.hostname === 'www.googletagmanager.com' &&
          url.pathname.includes('/debug/bootstrap')
        ) {
          console.log('Partytown: Matched GTM debug URL for proxying:', url.href) // Log si la condición coincide
          var proxyUrl = new URL(
            `https://<span class="math-inline">\{location\.hostname\}/proxytown/gtm</span>{url.pathname}${url.search}`
          )
          console.log('Partytown: Proxying GTM debug URL to:', proxyUrl.href) // Log la URL de proxy generada
          return proxyUrl
        }

        console.log('Partytown: Not proxying URL:', url.href)

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
