import React from 'react';
import { Link ,hashHistory} from 'react-router';
import {connect} from 'react-redux';
//框架依赖
import { Layout, Menu,Button, Breadcrumb,Affix } from 'antd';
const { Header, Content, Footer } = Layout;

import LoginModal from './../Common/LoginModal'

import {showSuccess} from './../Common/Common';

import './layout.less'

import {
  fetchRegister,
  fetchLogin,
  fetchIsLogin,
  fetchLogout
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
    this.JumpPost = this.JumpPost.bind(this);
  }
  LoginShow(type){
    console.log(this.props);
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
    this.props.dispatch(fetchLogin(parms))
  }
  Register(parms){
    console.log(parms);
    this.props.dispatch(fetchRegister(parms))
  }
  Logout(){
    this.props.dispatch(fetchLogout())
  }
  JumpPost(){
    console.log('跳转发帖页面');

    hashHistory.push({pathname:'/createcate'})
    console.log(hashHistory)
  }
  render () {
    const {children} = this.props;
    const userinfo = this.props.userinfo;
    var isLogin = userinfo.data && userinfo.data.id ;
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
              {!isLogin?<div className="login">
                  <button className="loginbtn" onClick={()=>this.LoginShow(1)} >登录</button>
                  <button className="loginbtn"  onClick={()=>this.LoginShow(0)} >注册</button>
                </div>
                :<div className="logout">
                  <a href=""><img src="http://image.diyidan.net/user/2017/4/24/U8hklQfLuTDsw6dR.jpg!tiny" alt="" /></a>
                  <button className="loginbtn" onClick={this.Logout}>退出</button>
                  <span onClick={this.JumpPost} className='postbtn'><i className='iconfont icon-cloud'></i>我要发帖</span>
                </div>
                 }
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
  componentWillReceiveProps(nextProps) {
    var userinfo = nextProps.userinfo;
    if(userinfo.data && userinfo.data.id){
      this.setState({
        visiable:false
      })
    }
  }
  componentDidMount() {
    var userinfo = this.props.userinfo;
    if(userinfo.data && userinfo.data.id){
    }else {
      this.props.dispatch(fetchIsLogin())
    }
  }
}
function mapStateToProps(state,ownProps){
  return {
    userinfo:state.userinfo,
  }
}

export default connect(mapStateToProps)(HomeLayout);