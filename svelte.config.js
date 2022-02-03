/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-auto';
import svelteProcess from 'svelte-preprocess'

const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: svelteProcess()
};

export default config;
