import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({ exclude: [/\/pdf\//, /\.solid\.tsx$/, /\/node_modules\//] }),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
