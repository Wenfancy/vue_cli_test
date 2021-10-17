module.exports = {
    pages:{
        index:{
            //入口
            entry:'src/main.js',//复写配置项达到修改配置的目的，此处可自定义，不可以什么都不写
        },
    },

    lintOnSave:false,    //关闭语法检查（定义未使用等等没必要的语法检查很烦）

    //开启代理服务器 
    //方式一 1.不能配置多个代理 2.不能灵活控制是否走代理，本地端口有重名资源的话，默认不走代理直接拿本地(优先匹配前端资源)
    /* devServer: {
        proxy: 'http://localhost:5000'
    } */


    //方式二
    devServer: {
        proxy: {
          '/entrance1': { //;走代理就跟请求前缀（可自定义名字）
            target: 'http://localhost:5000',
            pathRewrite:{'^/entrance1':''},      //不带此配置,直接404
            ws: true,       //用于支持websocket
            changeOrigin: true      //改源,撒谎,最好为true,用于控制请求头中的host值
          },

          '/entrance2': {
            target: 'http://localhost:5001',
            pathRewrite:{'^/entrance2':''},
            ws: true,
            changeOrigin: true 
          },
        }
      }
}