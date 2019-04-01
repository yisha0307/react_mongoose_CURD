import React, {Component} from 'react'
import {Modal, Form, Input} from 'antd'
import { Module } from 'module';

const FormItem = Form.Item

// 样式
const formLayout = {
    labelCol: {
        xs: {span: 6},
        sm: {span: 6}
    },
    wrapperCol: {
        xs: {span: 6},
        sm: {span: 6}
    }
}
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 0
        }
    }
    onOk = () => {
        const {onModelCancel, saveData} = this.props
    }
    render() {
        const {editVisible, onModelCancel} = this.props
        // visible为modal组件自带方法
        return (
            <Modal visible={editVisible} onCancel = {onModelCancel}></Modal>
        )
    }
}