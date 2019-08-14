import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'

import './index.less'

export default class LeftNav extends Component {
    render() {
        return (
            <Link to='/' className="left-nav">
                <header className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>User Interface</h1>
                </header>
            </Link>
        )
    }
}