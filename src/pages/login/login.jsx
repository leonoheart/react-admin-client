import React, {Component} from 'react'
import {Form, Icon, Input, Button} from 'antd';

import './login.less'
import logo from './images/logo.png'

/* 
login router component
*/

class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const form = this.props.form;
        const values = form.getFieldsValue();
        console.log("handleSubmit()", values);    
    }

    vadidatePwd = (rule, value, callback) => {
        console.log('validatePwd()', rule, value);
        if(!value) {
            callback('Please input the password!');
        } else if (value.length < 4) {
            callback('Password must be longer than 4 characters!');
        } else if (value.length > 12) {
            callback('Password must be shorter than 12 characters!');
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('Username must be alpanumeric!');
        } else {
            callback();
        }
        
    }

    render() {

        const form = this.props.form;
        const {getFieldDecorator} = form;

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
                            {getFieldDecorator('username', {
                                rules: [{ required: true, whitespace:true, message: 'Please input your username!' },
                                        { min: 4, message: 'username cannot be shorter than 4 characters!' },
                                        { max: 12, message: 'Username cannot be longer than 12 characters!' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: 'Username must be alpanumeric!' },
                                    ],    
                                })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                    rules: [
                                        { 
                                            validator: this.vadidatePwd
                                        }
                                    ],
                                    })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    />,
                                )}
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

const WrapLogin = Form.create()(Login);
export default WrapLogin