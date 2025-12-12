/** @type {import('next').NextConfig} */
module.exports = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    minimumCacheTTL: 60,
  },
  env: {},
};
