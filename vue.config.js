module.exports = {
    lintOnSave: false,
    devServer: {
  proxy: { 
            '/userlogin': {
                target: 'http://apiv2.shawdo.com:8080', 
                ws: true,
                 changOrigin: true,

             }

         }
    }
  }