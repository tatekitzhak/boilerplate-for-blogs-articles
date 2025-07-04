module.exports = {
  mode: 'development',
  entry: ['./src/main.tsx'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: require('./webpack.plugins'),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: require('./webpack.aliases'),
  },
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    historyApiFallback: true, // <-- Add this line
    port: 8081,
    // allowedHosts: [
    //   '0.0.0.0',
    //   'localhost',
    //   'hyperesources.com',
    //   'www.hyperesources.com',
    //   'versityresources.com',
    //   'www.versityresources.com'
    //  ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
};
