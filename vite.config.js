import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [react()],
	publicDir: 'static',
	build: {
		outDir: 'public',
		emptyOutDir: true,
	},
});
