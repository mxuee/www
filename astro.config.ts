// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import db from '@astrojs/db'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  adapter: vercel(),
  integrations: [sitemap(), db(), icon()],
  experimental: {
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
