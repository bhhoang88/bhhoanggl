import { defineConfig, loadEnv } from 'vite'
import { ConfigEnv } from 'vite'

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())

  const port = env.VITE_PORT ? parseInt(env.VITE_PORT) : 3000

  return {
    server: {
      port,
    },
  }
})
