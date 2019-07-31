const path = require('path');
const WebpackBar = require('webpackbar');
const CracoAntDesignPlugin = require('craco-antd');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isAnalysis = process.env.REACT_APP_MODE === 'analysis', isDev = process.env.NODE_ENV === 'development',
  isProd = process.env.NODE_ENV === 'production';
// 添加任意的环境变量：https://facebook.github.io/create-react-app/docs/deployment#customizing-environment-variables-for-arbitrary-build-environments
const absPath = (dir) => path.resolve(__dirname, dir);
const generatePlugins = () => {
  const plugins = [
    new WebpackBar(),
    new HardSourceWebpackPlugin(),
  ];
  if (isAnalysis) {
    plugins.push(new BundleAnalyzerPlugin());
  }
  return plugins;
};

module.exports = {
  eslint: {
    enable: false
  },
  webpack: {
    devtool: isDev ? 'cheap-module-eval-source-map' : 'none',
    alias: {
      '@': absPath('./src')
    },
    plugins: generatePlugins()
  },
  plugins: [{ plugin: CracoAntDesignPlugin }]
};
