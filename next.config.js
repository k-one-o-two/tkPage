// next.config.js

module.exports = {
  images: {
    unoptimized: true,
  },
  // There's an unrelated pnpm-lock.yaml in the home directory, which makes
  // Next guess the wrong workspace root. Pin it to this project.
  turbopack: {
    root: __dirname,
  },
};
