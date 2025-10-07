// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import db from '@astrojs/db'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  adapter: vercel(),
  integrations: [preact(), sitemap(), db()],
  experimental: {
    liveContentCollections: true,
    fonts: [
      {
        cssVariable: '--font-sofia-sans',
        name: 'Sofia Sans',
        provider: fontProviders.google()
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
