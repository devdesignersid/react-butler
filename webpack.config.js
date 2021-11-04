const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
require("dotenv").config({ path: "./.env" });

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const isProduction = LAUNCH_COMMAND === "prod";
const shouldUseSourceMaps = isProduction;

const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "build"),
};

const prodEntry = [PATHS.app];
const devEntry = [
  ...prodEntry,
  require.resolve("webpack-dev-server/client") + "?/",
];

const baseLoaders = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "swc-loader",
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
          },
        },
      },
    },
  },
];

const terserPlugin = new TerserPlugin({
  parallel: true,
  terserOptions: {
    parse: {
      ecma: 8,
    },
    compress: {
      comparisons: false,
      ecma: 5,
      inline: 2,
    },
    output: {
      ascii_only: true,
      ecma: 5,
    },
  },
});

const tsconfigPathsPlugin = new TsconfigPathsPlugin({
  baseUrl: "app",
});

const resolvePlugins = [tsconfigPathsPlugin];

// Common webpack configuration for development & production
const baseConfigs = {
  entry: isProduction ? prodEntry : devEntry,
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: PATHS.build,
    publicPath: "/",
  },
  module: {
    strictExportPresence: true,
    rules: [{ parser: { requireEnsure: false } }, ...baseLoaders],
  },
  resolve: {
    plugins: resolvePlugins,
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: [path.resolve("."), "node_modules"],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [terserPlugin],
    splitChunks: {
      chunks: "async",
      name: false,
    },
    runtimeChunk: true,
  },
};

const webpackDefinePlugin = new webpack.DefinePlugin({
  "process.env": JSON.stringify(process.env),
});

const defaultHtmlPlugConfig = {
  inject: true,
  title: process.env.HTML_DOCUMENT_TITLE,
  template: `${PATHS.app}/index.html`,
};

const additionalHtmlPlugConfig = isProduction && {
  minify: {
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
    removeComments: true,
    useShortDoctype: true,
    keepColsingSlash: true,
    collapseWhitespace: true,
    removeEmptyAttributes: true,
    removeReduntantAttributes: true,
    removeStyleLinkTypeAttributes: true,
  },
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  ...defaultHtmlPlugConfig,
  ...additionalHtmlPlugConfig,
});

const commonPlugins = [webpackDefinePlugin, htmlWebpackPlugin];
const devPlugins = [];
const prodPlugins = [];

// Webpack development configuration
const devConfigs = {
  devtool: "eval-source-map",
  plugins: [...commonPlugins, ...devPlugins],
  devServer: {
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    client: {
      logging: "info",
      overlay: {
        warnings: isProduction,
        errors: true,
      },
      progress: true,
      reconnect: true,
    },
  },
};

// Webpack production configuration
const prodConfigs = {
  devtool: "source-map",
  bail: isProduction,
  plugins: [...commonPlugins, ...prodPlugins],
};

const mainConfig = isProduction
  ? {
      ...baseConfigs,
      ...prodConfigs,
    }
  : { ...baseConfigs, ...devConfigs };

module.exports = mainConfig;
