import { defineConfig } from 'vite'
import { resolve, join } from 'path'
import fs from 'fs'

const redirectToDir = () => ({
  name: 'redirect-to-dir',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const filePath = join(process.cwd(), req.url)
      fs.stat(filePath, (err, stats) => {
        // If a folder is requested, rewrite to index.html inside it
        if (!err && stats.isDirectory()) {
          if (!req.url.endsWith('/')) {
            res.writeHead(301, { Location: req.url + '/' })
            res.end()
            return
          }
          req.url = req.url + 'index.html'
        }
        next()
      })
    })
  }
})

export default defineConfig({
  base: '/',
  plugins: [redirectToDir()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        blog1: resolve(__dirname, 'blog/Lorem-ipsum/index.html'),
        blog2: resolve(__dirname, 'blog/choosing-a-linux-distro/index.html'),
      }
    }
  }
})
