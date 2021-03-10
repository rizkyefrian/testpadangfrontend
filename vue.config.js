module.exports = {
    devServer: {
      proxy: 'http://testpadang.000webhostapp.com/'
    //   '^/api': { 
    //     target: 'http://testpadang.000webhostapp.com/', 
    //     changeOrigin: true, 
    //     secure: false, 
    //     pathRewrite: {
    //       '^/api': '/api'
    //     }, 
    //     logLevel: 'debug' 
    //   }, 
    }
}