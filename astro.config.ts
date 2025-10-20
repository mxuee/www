// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  adapter: vercel(),
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()]
  }
})
