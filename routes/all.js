const express = require('express')
const Model = require('../models/all')
const route = express.Router()

// 查list
route.get('/list', async (request, response) => {
    let ret = {
        'success': true,
        'code': 200,
        'message': '',
        'data': []
    }
    const datas = await Model.find()
    ret.data = datas
    response.send(ret)
})

// create, update, delete
// 没有id --- create
// 有id 没有status --- update
// 有id 有status --- delete
route.post('/update', async (request, response) => {
    let ret = {
        "success": true,
        "code": 200,
        "message": "",
        "data" :[]
    }
    const body = request.body,
        id = body.id || 0,
        status = body.status ||  0

    const args = body
    if (!id) {
        // 新建
        const dataSourceObj = await Model.create(args)
        ret.data = {
            id: dataSourceObj.id,
            create: true
        }
    } else if (!status) {
        // 修改
        const dataSourceObj = await Model.findOne({id: args.id})
        for (let key in args) {
            if (key == 'id' || key == '_id') {
                continue
            }
            dataSourceObj[key] = args[key]
        }
        const new_dataSourceObj = await dataSourceObj.save()
        ret.data = {
            id: new_dataSourceObj.id, 
            update: true
        }
    } else {
        // 删除
        const dataSourceObj = await Model.findOneAndRemove({id: args.id})
        ret.data = {
            id: dataSourceObj.id,
            delete: true
        }
    }
    response.send(ret)
})

module.exports = route