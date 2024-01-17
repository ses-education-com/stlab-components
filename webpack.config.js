const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

console.log("\n\n\nBundling the components...\n")

module.exports = {
  mode: 'development',
  entry: './src/export.jsx', // Exporting all components here
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.esm.js',
    library: {
      type: 'module',
    },
    clean: true,
  },
  experiments: {
    outputModule: true,
  },
  externals: [
    // remove all things related to @material-ui (for some reason, just enumerating did not work)
    (context, request, callback) => {
      if (/^@material-ui/.test(request)) {
        return callback(null, 'commonjs ' + request);
      }
      callback();
    },
    {
      'jss': 'commonjs jss',
      'css-vendor': 'commonjs css-vendor',
      'lodash': 'commonjs lodash',
      'prop-types': 'commonjs prop-type',
      'react': 'commonjs react',
      'react-dom': 'commonjs react-dom',
      'react-router-dom': 'commonjs react-router-dom',
      'sass': 'commonjs sass',
      'uniquid': 'commonjs uniquid'
    }
  ],
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            // Add additional rules for CSS, images, etc.
        ],
        
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // Add plugins if needed, e.g., HtmlWebpackPlugin, MiniCssExtractPlugin
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new BundleAnalyzerPlugin()
    ],
};
  
