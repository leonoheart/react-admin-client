import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { Menu, Icon } from 'antd';

import './index.less'

const { SubMenu } = Menu;

export default class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>User Interface</h1>
                </Link>
                <Menu
                    mode="inline"
                    theme="dark"
                    >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Home</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <Icon type="mail" />
                            <span>Products</span>
                        </span>
                        }
                    >
                        <Menu.Item key="5">
                            <Icon type="mail" />
                            <span>Category admin</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="mail" />
                            <span>Products admin</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}