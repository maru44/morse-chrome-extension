import { crx, defineManifest } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Morse Input',
  description: 'Input by morse code',
  version: '1.0.0',
  action: {
    default_popup: 'index.html',
  },
  // content_security_policy: {
  //   extension_pages: "default-src 'self'",
  // },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
})
