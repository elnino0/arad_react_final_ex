import react from '@vitejs/plugin-react'

import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
  // Load environment variables from .env files
  console.log("mode", mode)
  console.log("loadenv", loadEnv(mode, process.cwd()))
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()+ "\\.env") };
  return defineConfig({
    base: "/",
    plugins: [react()],
    preview: {
     port: 5173,
     strictPort: true,
    },
    server: {
     port: 5173,
     strictPort: true,
     host: true,
     origin: "http://0.0.0.0:5173",
    },
   });
};


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


