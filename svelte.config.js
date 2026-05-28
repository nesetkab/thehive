import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ fallback: undefined }),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        if (message.includes('404')) return;
        throw new Error(message);
      }
    }
  }
};

export default config;
