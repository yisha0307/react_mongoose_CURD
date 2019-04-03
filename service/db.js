// mongoose初始化配置

const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:29017/CURD'
const autoIncrement = require('mongoose-auto-increment')

const connection = mongoose.createConnection(DB_URL, { useNewUrlParser: true })

// id自增插件初始化
autoIncrement.initialize(connection)

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open to ' + DB_URL)
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected')
})

module.exports = {
    mongoose: mongoose,
    connection: connection,
    autoIncrement: autoIncrement
}