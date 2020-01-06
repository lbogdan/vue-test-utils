/* eslint-disable max-len */

// const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
// const browser = process.env.TARGET === 'browser'
const path = require('path')

const projectRoot = path.resolve(__dirname, '../../')

const rules = [].concat(
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
    // exclude: /node_modules\/(?!(shared|create-instance)\/).*/
  }
)

module.exports = {
  // experiments: {
  //   mjs: true
  // },
  module: {
    rules
  },
  // externals: !browser ? [nodeExternals()] : undefined,
  resolve: {
  //   symlinks: false
    alias: {
      '@vue/server-test-utils': '@vue/server-test-utils/src/index.js',
      // `${projectRoot}/packages/server-test-utils/src/index.js`,
      // '~vue/test-utils': '@vue/test-utils/src',
      '@vue/test-utils': '@vue/test-utils/src/index.js',
      // `${projectRoot}/packages/test-utils/src/index.js`,
      '~resources': `${projectRoot}/test/resources`
    }
  },
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  devtool: '#inline-cheap-module-source-map',
  node: {
    fs: 'empty',
    module: 'empty'
  },
  plugins: [new webpack.EnvironmentPlugin(['TEST_ENV'])]
}
