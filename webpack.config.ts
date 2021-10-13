import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          to: './dist',
        },
      ],
    }),
  ],
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
  },
};
