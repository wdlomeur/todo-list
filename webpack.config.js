const path = require('path');

module.exports = env => {
  return {
    entry: ['./src/js/app.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist/js'),
      publicPath: 'dist/js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
      ],
    },
  };
};