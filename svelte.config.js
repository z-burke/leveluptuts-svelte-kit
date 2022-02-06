import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig), sveltePreprocess()],
	kit: {
		adapter: adapter()
	},
};

export default config;
