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
    const data = await Model.find()
    ret.data = data
    response.send(ret)
})
module.exports = route