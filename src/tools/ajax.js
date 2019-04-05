const joinQuery = (params) => {
    var querys = Object.keys(params).map( key => {
        return `${key}=${params[key]}`
    }).join('&')
    return `?${querys}`
}

// 原生ajax
const ajax = function (request) {
    var r = new XMLHttpRequest()
    r.open(request.method, request.url, true)
    if (request.contentType !== undefined) {
        r.setRequestHeader('Content-Type', request.contentType)
    }

    r.onreadystatechange = function(event) {
        if (r.readyState === 4) {
            const data = JSON.parse(r.response)
            request.success(data)
        }
    }
    if (request.method === 'GET') {
        r.send()
    } else {
        r.send(request.data)
    }
}
// 用promise封装原生ajax
const ajaxPromise = (url, method, form) => {
    return new Promise((resolve, reject) => {
        const request = {
            url: url,
            method: method,
            contentType: 'application/json',
            success: r => resolve(r),
            error: e => {
                const r = {
                    success: false,
                    messge: e.message || '网络错误, 请稍后尝试'
                }
                reject(r)
            }
        }
        if (method === 'post') {
            const data = JSON.stringify(form)
            request.data = data
        }
        ajax(request)
    })
}

module.exports = {
    get: (path, params = {}) =>  {
        const url = path + joinQuery(params)
        const method = 'get'
        const form = {}
        return ajaxPromise(url, method, form)
    },
    post: (path, params = {}) => {
        const url = path
        const method = 'post'
        return ajaxPromise(url, method, params)
    }
}