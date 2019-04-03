const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/all')
app.use(bodyParser.json())

// 注册路由
app.use('/all', routes)
var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
})