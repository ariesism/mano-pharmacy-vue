import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

// https://vite.dev/config/
export default defineConfig({
  base: isGitHubActions ? '/mano-pharmacy-vue/' : '/',
  plugins: [
    vue(),
    tailwindcss()
  ],
})
