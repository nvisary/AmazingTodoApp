const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', "./app/index.js"],
    output: {
        path: path.join(__dirname, "/../public/js/"),
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            },
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
      }

}