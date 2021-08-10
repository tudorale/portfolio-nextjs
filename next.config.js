
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({

  images: {
    domains: ['img.shields.io']
  },
});