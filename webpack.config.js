const path = require('path');

module.exports = {
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),  
    filename: 'bundle.js'
  },
  performance: {
    maxEntrypointSize: 244000,
    maxAssetSize: 244000
},
  mode:"production",
  resolve:{
     fallback: {
    "fs": false,
    "tls": false,
    "net": false,
    "path": false,
    "zlib": false,
    "http": false,
    "https": false,
    "stream": false,
    "crypto": false,
    "util":false,
    "async_hooks":false,
    "querystring":false,
    "string_decoder":false,
    "url":false,
    "buffer":false,
    "os":false
  } 
  }
};