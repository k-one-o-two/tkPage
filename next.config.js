// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: isProd ? '/tkPage/' : '',
  images: {
    unoptimized: true,
  },
};
