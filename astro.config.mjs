import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import react from '@astrojs/react'

// https://astro.build/config
// import vercel from '@astrojs/vercel/static'
// DOC: https://docs.astro.build/es/guides/integrations-guide/vercel/
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
  site: 'https://johnserrano.co',
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
            'pagead2.googlesyndication.com',
            'google-analytics.com'
          ]

          if (proxiedHosts.includes(url.hostname)) {
            // const proxyUrl = new URL('/proxytown/gtm', 'https://johnserrano.co');
            const proxyUrl = new URL(location.origin);
            proxyUrl.searchParams.append('url', url.href);
            return proxyUrl;
          }
    
          return url;
        },
        forward: ['dataLayer.push', 'fbq'],
      },
    }),
  ],
  output: 'static',
  // adapter: vercel({
  //   analytics: true,
  // }),
})
