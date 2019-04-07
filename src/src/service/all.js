import ajax from '../tools/ajax'

// 组件请求类
const All = {
    getList: (params) => {
        let data = ajax.get('/all/list', params)
            .then(res => {
                return res
            })
        return data
    },
    update: (params) => {
        let data = ajax.post('/all/update', params)
            .then(res => {
                return res
            })
        return data
    }
}

export default All