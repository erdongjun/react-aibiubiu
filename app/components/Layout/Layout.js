import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
//框架依赖
import { Layout, Menu,Button, Breadcrumb,Affix } from 'antd';
const { Header, Content, Footer } = Layout;

import LoginModal from './../Common/LoginModal'

import {showSuccess} from './../Common/Common';

import './layout.less'

import {
  fetchRegister,
  login
  
} from '../../actions/userinfo'

class HomeLayout extends React.Component {
  constructor(){
    super()
    this.state = {
        visiable:false,
        type:0
    };
    this.LoginShow = this.LoginShow.bind(this);
    this.LoginHide = this.LoginHide.bind(this);
    this.Login = this.Login.bind(this);
    this.Logout = this.Logout.bind(this);
    this.Register = this.Register.bind(this);
  }
  LoginShow(type){
    console.log(this.props);
   this.props.dispatch(fetchRegister())
    this.setState({
        visiable:true,  
        type:type
    })
  }
  LoginHide(){
    this.setState({
        visiable:false
    })
  }
  Login(parms){
    console.log('login')
  }
  Register(parms){
    console.log(parms);
    console.log('Register');
  }
  Logout(){
    console.log('logout')
  }

  render () {
    const {children} = this.props;

    return (
      <Layout  className="layout bg"  >
        <Header className="head" >
          <div className="headwrap">
            <div className="logo" >
              <img  className="logoimg" src={require('../../static/imgs/logo.png')} alt="logo"/>
            </div>
            <div className="menu">
              <ul>
                  <li className="active"><Link to={'/'}>首页</Link></li>
                  <li><Link to={'/cate/12'}>分区</Link></li>
                  <li><Link to={'/products'}>热帖</Link></li>
              </ul>
            </div>
            <div className="loginwrap">
                <div className="login">
                  <button className="loginbtn" onClick={()=>this.LoginShow(1)} >登录</button>
                  <button className="loginbtn"  onClick={()=>this.LoginShow(0)} >注册</button>
                </div>
                <div className="logout">
                  <a href=""><img src="http://image.diyidan.net/user/2017/4/24/U8hklQfLuTDsw6dR.jpg!tiny" alt="" /></a>
                  <button className="loginbtn" >退出</button>
                </div>
            </div>
          </div>
        </Header>
        <Content className="content">
              {children}
        </Content>
        <Footer className="footer" style={{ textAlign: 'center' }}>
          aibiubiu.com ©2017 Created by xifan
        </Footer>
        <LoginModal visiable={this.state.visiable} type={this.state.type} LoginShow={this.LoginShow} LoginHide={this.LoginHide} Login={this.Login} Register={this.Register} Logout={this.Logout} />
      </Layout>
    );
  }
}
function mapStateToProps(state,ownProps){
  return {
    userinfo:state.userinfo,
  }
}

export default connect(mapStateToProps)(HomeLayout);