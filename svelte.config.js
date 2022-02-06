import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-auto';
import svelteProcess from 'svelte-preprocess';

const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter()
	},
	preprocess: [svelteProcess(), mdsvex(mdsvexConfig)]
};

export default config;
