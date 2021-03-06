import React, { Component } from 'react'
import { Button, Table, Modal } from 'antd'

import EditModal from './edit'
import AllService from '../../service/all'
const confirm = Modal.confirm

export default class All extends Component {
    state = {
        editVisible: false,
        dataSource: [],
        editDataObj: {}
    }

    // 显示弹窗
    addDataSource = () => {
        this.setState({
            editVisible: true,
            editDataObj: {}
        })
    }

    // 隐藏弹窗
    onModelCancel = () => {
        this.setState({
            editVisible: false
        })
    }

    // saveData = (newData) => {
    //     const {dataSource} = this.state
    //     dataSource.push(newData)
    //     this.setState({
    //         dataSource
    //     })
    // }
    // updateData = (values) => {
    //     const {dataSource} = this.state

    //     const status = values.status || 0

    //     const index = dataSource.findIndex(d => d.key === values.key)
    //     if (status >=0 ) {
    //         let replace = dataSource.splice(index, 1, values)
    //     } else {
    //         let deleted = dataSource.splice(index, 1)
    //     }

    //     this.setState({
    //         dataSource
    //     })
    // }
    getDataSourceList = async () => {
        const {data} = await AllService.getList()
        this.setState({
            dataSource: data
        })
    }
    updateData = async (values) => {
        const {data} = await AllService.update(values)
        this.getDataSourceList()
    }

    deleteHandle = (record) => {
        confirm({
            title: `您确定要删除?(${record.id})`,
            onOk: () => {
                this.updateData({
                    id: record.id,
                    status: -1
                })
            }
        })
    }
    editHandle = (record) => {
        this.setState({
            editVisible: true,
            editDataObj: record
        })
    }
    componentWillMount () {
        this.getDataSourceList()
    }
    render () {
        const {editVisible, dataSource, editDataObj} = this.state

        return (
            <div className='content-inner'>
                <Button type='primary' onClick = { this.addDataSource }>新建数据</Button>
                <Table columns = {this.columns} dataSource = {dataSource}/>
                <EditModal editVisible = {editVisible} onModelCancel = {this.onModelCancel} saveData = {this.saveData} updateData = {this.updateData} editDataObj={editDataObj}/>
            </div>
        )
    }

    columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        }, {
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
        }, {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (text, record) => (
                <div style={{textAlign: 'center'}}>
                    <a href='javascript:;' style={{marginRight: '10px'}} onClick={() => this.editHandle(record)}>
                    编辑
                    </a>
                    <a href='javascript:;' style={{marginRight: '10px'}} onClick={() => this.deleteHandle(record)}>
                    删除
                    </a>
                </div>
            )
        }
    ]
}