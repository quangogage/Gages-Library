const path = require('path');

module.exports = {
  entry: './gagelib.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
