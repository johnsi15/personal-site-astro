import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'
import partytown from '@astrojs/partytown'

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
    drafts: true,
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
          const proxiedHosts = [
            'googletagmanager.com',
            'connect.facebook.net',
          ]

          if (proxiedHosts.includes(url.hostname)) {
            const proxyUrl = new URL('/proxytown/gtm', location.origin);
            // const proxyUrl = new URL(location.origin);
            proxyUrl.searchParams.append('url', url.href);
            return proxyUrl;
          }
    
          return url;
        },
        forward: ['dataLayer.push', 'fbq'],
      },
    }),
  ],
  output: 'hybrid',
  adapter: vercel({
    analytics: true,
  })
})
