/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  publicPath: "/georama_ar/", // process.env.NODE_ENV === "production" ? "/georama_ar/" : "/",

  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: {
        "@": path.join(__dirname, "/src"), // 1. @の参照先の変更
      },
    },
  },
  outputDir: "./dist", // 2. 出力先
  pages: {
    index: {
      entry: "src/main.ts",
      template: "src/assets/index.html",
      title: "日立造船AR",
    },
  },
};
