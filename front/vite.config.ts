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
  content_security_policy: {
    extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'",
  },
  // content_security_policy: {
  //   sandbox: "sandbox allow-scripts; script-src 'self' 'unsafe-eval'; worker-src blob:",
  // },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
})
