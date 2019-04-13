// 定义数据结构 & 操作数据库的model

const db = require('../service/db')
const { Schema } = db.mongoose

const allSchema = new Schema({
    name: {type: 'string', required: true},
    age: {type: 'string', required: true},
    address: {type: 'string', required: true}
}, {versionKey: false}) // 版本号不显示

const modalName = 'all'

// id自带插件引入 设置从1开始自增
// mongoose本身无id自增功能，应用plugin mongoose-auto-increment实现
allSchema.plugin(db.autoIncrement.plugin, {model: modalName, field: 'id', startAt: 1})
module.exports = db.connection.model(modalName, allSchema);