import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils'

const { Header, Footer, Sider, Content } = Layout;

/* 
login router component
*/

export default class Admin extends Component {
    render() {
        const user = memoryUtils.user
        if(!user || !user._id){
            return <Redirect to='/login'></Redirect>
        }
        return (
            <Layout style={{height:'100%'}}>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}