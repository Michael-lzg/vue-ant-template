const path = require('path')
const Webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const CompressionPlugin = require('compression-webpack-plugin')// 引入gzip压缩插件

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  indexPath: 'index.html',
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,

  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('@ant-design/icons/lib/dist$', path.resolve(__dirname, './src/icon.js'))

    config.optimization.minimizer('terser').tap((args) => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = true
      return args
    })

    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        },
        ant: {
          name: 'chunk-ant',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?ant-design-vue(.*)/
        },
        commons: {
          name: 'chunk-commons',
          minChunks: 2,
          priority: 5,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    })
  },

  configureWebpack: (config) => {
    // config.externals = {
    //   'ant-design-vue': 'antd'
    // }

    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new BundleAnalyzerPlugin())

      config.plugins.push(new Webpack.IgnorePlugin(/\.\/locale/, /moment/))

      // config.plugins.push(new CompressionPlugin({ // gzip压缩配置
      //   test: /\.js$|\.html$|\.css/, // 匹配文件名
      //   threshold: 10240, // 对超过10kb的数据进行压缩
      //   deleteOriginalAssets: false // 是否删除原文件
      // }))
    }
  },

  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1,

  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8082, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌

    // 配置多个代理
    proxy: {
      '/api': {
        target: 'https://www.mock.com',
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
