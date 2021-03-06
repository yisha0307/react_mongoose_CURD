import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb, Icon } from 'antd'

import BreadcrumbNameMap from './breadcrumbNameMap'

// withRouter目的是让被修饰的组件可以获取location/history/match等属性
const Bread = withRouter((props) => {
    const { location } = props
    const breadcrumbNameMap = BreadcrumbNameMap

    const url = location.pathname

    let isIndex = false
    if (url === '/') {
        isIndex = true
    }

    const nameItem = breadcrumbNameMap[url]

    const breadcrumbItems = [(
        <Breadcrumb.Item key='home'>
            <Link to=''><Icon type='home' /></Link>
        </Breadcrumb.Item>
    ), (<Breadcrumb.Item key={url}>
        <Link to={url}>{nameItem}</Link>
    </Breadcrumb.Item>)]

    return (
        isIndex ? null : 
            <div className='breadcrumb-content'>
                <Breadcrumb>
                    {breadcrumbItems}
                </Breadcrumb>
            </div>
    )
})

export default Bread
