// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  adapter: vercel(),
  integrations: [preact(), sitemap()],
  experimental: {
    fonts: [
      {
        cssVariable: '--font-sofia-sans',
        name: 'Sofia Sans',
        provider: fontProviders.google()
      }
    ]
  }
})
