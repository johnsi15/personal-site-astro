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
      config: {
        resolveUrl: (url, location, type) => {
          const proxiedHosts = ['googletagmanager.com', 'connect.facebook.net']

          if (proxiedHosts.includes(url.hostname)) {
            let pathname = url.pathname.substring(1)

            const proxyUrl = new URL(`/proxytown/gtm/${pathname}`, location.origin)

            url.searchParams.forEach((value, key) => {
              proxyUrl.searchParams.append(key, value)
            })

            console.log('Proxying URL:', url.href, 'to', proxyUrl.href)
            return proxyUrl
          }

          return url
        },
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
