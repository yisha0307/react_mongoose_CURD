import React, {Component} from 'react'
import {Modal, Form, Input} from 'antd'
// import { Module } from 'module';

const FormItem = Form.Item

// 表单样式
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

class EditModal extends Component {
    state = {key: 0}

    onOk = () => {
        const {onModelCancel, saveData, editDataObj, updateData} = this.props
        // getFieldsValue() 获取输入的值，antD Form组件自带
        const {resetFields, validateFields} = this.props.form
        validateFields((err, values) => {
            if (!err) {
                // 检验没错误之后再update data
                console.log(values)
                // 判断是update还是add
                if(editDataObj.key) {
                    // update
                    values.key = editDataObj.key
                    updateData(values)
                } else {
                    const key = this.state.key + 1
                    this.setState({key})
                    values.key = key
                    saveData(values)
                }
                // 重置表单
                resetFields()
                onModelCancel()
            }
        })
    }
    render() {
        const {editVisible, onModelCancel, editDataObj} = this.props
        const {getFieldDecorator} = this.props.form
        // visible为modal组件自带方法
        return (
            <Modal visible={editVisible} onCancel = {onModelCancel} onOk = {this.onOk}>
                <Form>
                    <FormItem label='姓名' {...formLayout}>
                    {getFieldDecorator('name', {
                        initialValue: editDataObj.name || '',
                        rules: [{
                            required: true, message: '姓名必填'
                        }]
                    })(
                        <Input />
                    )}
                    </FormItem>
                    <FormItem label='年龄' {...formLayout}>
                    {getFieldDecorator('age', {
                        initialValue: editDataObj.age || '',
                        rules: [{
                            required: true, message: '年龄必填'
                        }]
                    })(
                        <Input />
                    )}
                    </FormItem>
                    <FormItem label='住址' {...formLayout}>
                    {getFieldDecorator('address', {
                        initialValue: editDataObj.address || '',
                        rules: [{
                            required: true, message: '住址必填'
                        }]
                    })(
                        <Input />
                    )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
// Form.create()传入表单的方法给EditModal
export default Form.create()(EditModal)