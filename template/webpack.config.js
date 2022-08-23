module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'app.js',
  },
  devServer: {
    static: './public',
    host: 'localhost',
  },
};
