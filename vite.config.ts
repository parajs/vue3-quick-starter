import { fileURLToPath, URL } from 'node:url'

import { loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default function defineConfig(config: UserConfig): UserConfig {
  console.log('config', config)
  const env = loadEnv(config?.mode as string, process.cwd(), 'VITE_')
  console.log('env', env)
  const { VITE_API_PREFIX, VITE_BASE_URL } = env
  return {
    plugins: [
      vue(),
      vueJsx(),
      // AutoImport({
      //   resolvers: [ArcoResolver()]
      // }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true
          })
        ]
      }),
      vitePluginForArco({
        // modifyVars: {
        //   prefix: 'ever'
        // },
        varsInjectScope: ['./src/views', './src/components', './src/layouts'],
        // theme: '@arco-themes/vue-everlazaar',
        style: true
      }),
      svgLoader(),
      visualizer()
    ],
    server: {
      proxy: {
        [VITE_API_PREFIX]: {
          target: VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
}
