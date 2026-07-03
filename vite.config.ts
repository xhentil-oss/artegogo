import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.drartegogo.com',
        changeOrigin: true,
        secure: true,
        cookieDomainRewrite: '',
        configure: (proxy) => {
          proxy.on('proxyRes', (proxyRes) => {
            const sc = proxyRes.headers['set-cookie'];
            if (sc) {
              proxyRes.headers['set-cookie'] = sc.map((c: string) =>
                c.replace(/;\s*Secure/gi, '').replace(/;\s*SameSite=\w+/gi, '; SameSite=Lax')
              );
            }
          });
        },
      },
    },
  },
});
