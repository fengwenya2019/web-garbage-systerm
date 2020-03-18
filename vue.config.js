module.exports = {
  devServer: {
    proxy: {
      "/laji": {
        target: "http://192.168.58.49:8080/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/laji": ""
        },
        cookieDomainRewrite: {
          "*": "127.0.0.1"
        }
      }
    },
  }
}