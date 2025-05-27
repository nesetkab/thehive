/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack(config, { isServer, dev, buildId, config: nextConfigInstance, defaultLoaders, webpack }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: { // svgo is a tool SVGR uses for optimization
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                { name: 'removeDimensions' },
              ],
            },

          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
