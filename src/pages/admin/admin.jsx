import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
const { Footer, Sider, Content } = Layout;

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
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{backgroundColor: '#fff'}}>Content</Content>
                    <Footer style={{textAlign: 'center', color: '#ccc'}}>welcome to the site</Footer>
                </Layout>
            </Layout>
        )
    }
}