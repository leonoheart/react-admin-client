import React, { Component } from 'react'
import './index.less'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="header-top">
                    <span>ようこそ、admin</span>
                    <a href="javascript:">ログアウト</a>
                </div>
                <div className="header-bottom"></div>
            </div>
        )
    }
}