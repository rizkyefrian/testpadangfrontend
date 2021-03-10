module.exports = {
    devServer: {
      proxy: 'http://localhost:8000//'
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