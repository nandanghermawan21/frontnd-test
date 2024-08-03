import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import fs from 'fs';

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const pathSrc = path.resolve(__dirname, 'src')

console.log('Path src:', pathSrc);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on the mode
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      host: true, // Mengizinkan akses dari alamat IP mana saja
      port: 3070, // Port default, bisa diubah sesuai kebutuhan
      // https: {
      //   key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      //   cert: fs.readFileSync(path.resolve(__dirname, 'localhost-cert.pem')),
      // }
    },
    resolve: {
      extensions: ['.vue', '.js', '.ts', '.jsx', '.tsx', '.json', '.d.ts'],
      alias: {
        '~app': `${pathSrc}/app`,
        '~/': `${pathSrc}/`,
        '@/': `${pathSrc}/`,
      },
    },
    optimizeDeps: {
      include: ['fast-deep-equal'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/styles/index.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
      Pages({
        dirs: env.VITE_PAGES_DIR,
      }),
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
        dts: 'src/components.d.ts',
      }),

      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            scale: 1.2,
            warn: true,
          }),
        ],
        transformers: [
          transformerDirectives(),
          transformerVariantGroup(),
        ]
      }),
    ],
  }
})
