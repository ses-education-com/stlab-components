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
  externals: {
    '@material-ui/core': 'commonjs @material-ui/core',
    '@material-ui/data-grid': 'commonjs @material-ui/data-grid',
    '@material-ui/icons': 'commonjs @material-ui/icons',
    '@material-ui/lab': 'commonjs @material-ui/lab',
    '@tinymce/tinymce-react': 'commonjs @tinymce/tinymce-react',
    'react': 'commonjs react',
    'sass': 'commonjs sass',
    'tinymce': 'commonjs tinymce',
    'uniquid': 'commonjs uniquid'
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
        new BundleAnalyzerPlugin()
    ],
};
  
