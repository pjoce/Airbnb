const path = require('path');
const resolve = pathname => path.resolve(__dirname, pathname);
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'services': resolve('src/services'),
      'components': resolve('src/components'),
      'hooks': resolve('src/hooks'),
      'utils': resolve('src/utils'),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ]
}
