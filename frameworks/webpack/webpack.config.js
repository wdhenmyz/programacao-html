const { watch } = require('fs');
const path = require('path');

module.exports = [
  {
    watch: true,
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/WP-1'),
    }
  },

  {
    watch: true,
    entry: './src/teste.js',
    output: {
      filename: 'teste.js',
      path: path.resolve(__dirname, 'dist/WP-1'),
    },
  },

  {
    watch : true,
    entry: './src/teste5.jsx', // O arquivo principal do React
    output: {
      path: path.resolve(__dirname, 'dist/WP-1'),
      filename: 'teste5.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/, // Processa arquivos .js e .jsx
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      static: path.join(__dirname, 'dist/WP-1'),
      compress: true,
      port: 3000
    }  
  },

  {
    watch: true,
    entry: './src/teste2.js',
    output: {
      filename: 'teste2.js',
      path: path.resolve(__dirname, 'dist/WP-1'),
    },
  },

  {
    watch: true,
    entry: './src/teste3.js',
    output: {
      filename: 'teste3.js',
      path: path.resolve(__dirname, 'dist/WP-1'),
    },
  },

  {
    watch: true,
    entry: './src/teste4.js',
    output: {
      filename: 'teste4.js',
      path: path.resolve(__dirname, 'dist/WP-1'),
    },
  }
]

