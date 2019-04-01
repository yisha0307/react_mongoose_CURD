// 定义前端路由表
// Created by Yisha on 19/3/31

import React from 'react'
// react-router-dom是基于react-router, 加入了浏览器运行环境下的一些功能
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/main/header'
import Breadcrumb from './components/breadcrumb'
import All from './pages/all'
import Welcome from './pages/welcome'

export default () => {
    <Router>
        <div>
            <Header />
            <div className='main-contains' style={{minHeight: document.body.clientHeight}}>
                <Breadcrumb />
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route exact path='/all' component={All} />
                </Switch>
            </div>
        </div>
    </Router>
}