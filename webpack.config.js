const path = require('path');

module.exports = {
  mode: 'production',
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'final.bundle.js'
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },
  module: {
    rules: [
      {
        test: /\.(yml|yaml)$/,
        use: [{
             loader: 'file-loader',
             options: {
               name: 'locales/[folder]/[name].json',
               context: 'src'
              }
            },{
              loader: 'my-loader',
              options: {
                filename: '[name]'
              }
            }]
      }
    ]
  }
};
