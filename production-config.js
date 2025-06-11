// Production optimization configuration
import { defineConfig } from 'vite';

export const productionConfig = {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
          'charts': ['recharts'],
          'query': ['@tanstack/react-query'],
          'icons': ['lucide-react']
        },
        // Use content-based hashing for long-term caching
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    // Optimize bundle size
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 500
  },
  define: {
    // Remove development-only code
    'process.env.NODE_ENV': '"production"',
    '__DEV__': false
  },
  esbuild: {
    // Remove console.log in production
    drop: ['console', 'debugger']
  }
};

export default productionConfig;