const express = require('express')

const app = express()

const history = require('connect-history-api-fallback')

app.use(history())

app.use(express.static(__dirname+'/static'))

app.get('/person',(rep,res)=>{
    res.send({
        name:'GYH',
        age:19
    })
})

app.listen(5005,err=>{
    if(!err) console.log('服务端启动成功')
})