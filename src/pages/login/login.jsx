import React, {Component} from 'react'
import {Form, Icon, Input, Button} from 'antd';

import './login.less'
import logo from './images/logo.png'

/* 
login router component
*/

export default class Login extends Component {

    handleSubmit = (event) => {

    }
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt=""/>
                    <h1>React Project: Management system</h1>
                </header>
                <section className="login-content">
                    <h2>Login In</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}