import React from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div class='navbar'>
            <ul mode = 'horizontal' className='barstyle'>
                <li className = 'logostyle' key='logo'>
                    <Icon className='Iconstyle' type='api' />
                    <a rel = 'noopener noreferrer' target='_blank'>react · 学习平台</a> 
                </li>
                <li key='全部'>
                    <Link to = '/datasource?pageNum=1&pageSize=10'>全部</Link>
                </li>
                <li key='精华'>
                    <Link to = '/datasource?pageNum=1&pageSize=10'>精华</Link>
                </li>
                <li key='分享'>
                    <Link to ='/datasource?pageNum=1&pageSize=10'>分享</Link>
                </li>
                <li key='问答'>
                    <Link to ='/datasource?pageNum=1&pageSize=10'>问答</Link>
                </li>
            </ul>
        </div>
    )
}