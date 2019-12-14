const path = require('path')

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'components.js'
    },
  },
  filenameHashing: false,
  css: {
    extract: false,
  }
}
