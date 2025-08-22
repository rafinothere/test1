import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 VERY IMPORTANT — change base depending on deployment
  base: '/MINDSPRING-TUITION/', 
});