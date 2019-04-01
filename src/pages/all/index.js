import React, { Component } from 'react'
import { Button, Table } from 'antd'

import EditModal from './edit'

export default class All extends Comment {
    constructor (props) {
        super(props)
        this.state = {
            editVisible: false
        }
    }

    // 显示弹窗
    addDataSource = () => {
        this.setState({
            editVisible: true
        })
    }

    // 隐藏弹窗
    onModelCancel = () => {
        this.setState({
            editVisible: false
        })
    }

    render () {
        const {editVisible} = this.state

        return (
            <div className='content-inner'>
                <Button type='primary' onClick = { this.addDataSource }>新建数据</Button>
                <Table columns = {this.columns}/>
                <EditModal editVisible = {editVisible} onModelCancel = {onModelCancel} />
            </div>
        )
    }

    columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address'
        }
    ]
}