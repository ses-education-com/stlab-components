const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  externals: {
    react: 'commonjs-module react',
    'hoist-non-react-statics': 'commonjs-module hoist-non-react-statics',
    'jss': 'commonjs-module jss'
  },
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
    ],
};
  
