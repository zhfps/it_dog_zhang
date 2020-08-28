const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addWebpackModuleRule,
  overrideDevServer,
  addLessLoader,
} = require('customize-cra')
const path = require('path')
const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    '/': {
      target: 'http://127.0.0.1:8089',
      changeOrigin: true,
      // pathRewrite: { '^/api': '/' },
    },
  }
  configFunction.port = 8080

  return configFunction
}

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addWebpackAlias({
      ['@']: path.resolve(__dirname, 'src'),
    }),
    addWebpackModuleRule({
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: '@svgr/webpack',
          // options: {
          //     babel: false,
          //     icon: true,
          // },
        },
        {
          loader: 'url-loader',
        },
      ],
    })
  ),
  devServer: overrideDevServer(),
  // addProxy()
}
