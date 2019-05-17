const path = require('path');

const rootPath = process.cwd();
const resolvePath = path.resolve.bind(path, rootPath);

const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules', resolvePath('src')],
  },

  optimization: {
    minimize: false
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        include: resolvePath('src'),
        use: 'awesome-typescript-loader'
      },
    ]
  }
};
