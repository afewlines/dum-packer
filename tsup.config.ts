import { defineConfig } from 'tsup';

const config = defineConfig({
	entry: ['src/index.ts'],
	publicDir: 'public/',

	target: 'esnext',
	format: ['cjs', 'esm'],

	cjsInterop: true,
	clean: true,
	dts: true,
	splitting: false,
	sourcemap: true,

	minify: false,
});
export default config;
