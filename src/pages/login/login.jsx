import React, {Component} from 'react'

import './login.less'
import logo from './images/logo.png'

/* 
login router component
*/

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt=""/>
                    <h1>React Project: Management system</h1>
                </header>
                <section className="login-content">
                    <h2>Login In</h2>
                    <div>组件标签</div>
                </section>
            </div>
        )
    }
}