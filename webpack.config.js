const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  return {
    entry: "./src/index.js",

    output: {
      filename: isDev ? "main.js" : "main.[contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true // limpia la carpeta build automáticamente
    },

    mode: isDev ? "development" : "production",

    devtool: isDev ? "source-map" : false,

    devServer: {
      static: {
        directory: path.join(__dirname, "public")
      },
      port: 3033,
      historyApiFallback: true,
      hot: true,
      open: true
    },

    module: {
      rules: [
        // --- BABEL ---
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        },

        // --- CSS ---
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },

        // --- IMÁGENES / ASSETS ---
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/[hash][ext]"
          }
        },

        // --- FUENTES ---
        {
          test: /\.(woff2?|ttf|eot)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[hash][ext]"
          }
        }
      ]
    },

    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico"
      }),
      new ESLintPlugin({
        extensions: ["js", "jsx"],
        emitWarning: true
      })
    ],

    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
  };
};
