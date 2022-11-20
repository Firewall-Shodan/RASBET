const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '~/components': path.resolve(__dirname, 'src/components'),
      '~/modules': path.resolve(__dirname, 'src/modules'),
      '~/utils': path.resolve(__dirname, 'src/utils'),
      '~/pages': path.resolve(__dirname, 'src/pages'),
      '~/hooks': path.resolve(__dirname, 'src/hooks'),
      '~/redux/services': path.resolve(__dirname, 'src/redux/services'),
      '~/redux/features': path.resolve(__dirname, 'src/redux/features'),
    },
  },
};