const path = require('path');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/WP-1'),
    }
  },

  {
    entry: './src/teste.js',
    output: {
      filename: 'teste.js',
      path: path.resolve(__dirname, 'dist/WP-1'),
    },
  },

  {
    entry: './src/teste2.js',
    output: {
      filename: 'teste2.js',
      path: path.resolve(__dirname, 'dist/WP-1'),
    },
  },

  {
    entry: './src/teste3.js',
    output: {
      filename: 'teste3.js',
      path: path.resolve(__dirname, 'dist/WP-1'),
    },
  },

  {
    entry: './src/teste4.js',
    output: {
      filename: 'teste4.js',
      path: path.resolve(__dirname, 'dist/WP-1'),
    },
  }
]

