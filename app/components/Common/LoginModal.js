import React from 'react';
import { Modal, Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

import './common.less'

class HorizontalLoginForm extends React.Component {
	constructor(props){
		super(props);
		this.state={
			loading: false,
			username:'',
			password:''
		}
		this.showModal = this.showModal.bind(this);
		this.handleOk = this.handleOk.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit (e) {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	}
	showModal(type){
		this.props.LoginShow(type)
	}
	handleOk(){
		console.log(this)
	    this.setState({ loading: true });
	    setTimeout(() => {
	        this.setState({ loading: false });
			this.props.Login()
	    }, 1000);
	}

	handleCancel(){
	    this.props.LoginHide()
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		let type = this.props.type;
		if(type==0){
			return(
				<Modal footer={null} title="注册" width = '330px' wrapClassName='loginBox' visible={this.props.visiable} onOk={this.handleOk} onCancel={this.handleCancel}>
					<Form onSubmit={this.handleSubmit}>
				        <FormItem>
				          {getFieldDecorator('userName', {
				            rules: [{ required: true, message: 'Please input your username!' }],
				          })(
				            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
				          )}
				        </FormItem>
				        <FormItem>
				          {getFieldDecorator('password', {
				            rules: [{ required: true, message: 'Please input your Password!' }],
				          })(
				            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
				          )}
				        </FormItem>
				         <FormItem>
				          {getFieldDecorator('confirmpassword', {
				            rules: [{ required: true, message: 'Please input your Password!' }],
				          })(
				            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="confirmPassword" />
				          )}
				        </FormItem>
				        <FormItem>
				          <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
				          <p className='des'><a href="javascript:;" onClick={()=>this.showModal(1)}>login now!</a></p>
				        </FormItem>
				     </Form>
		        </Modal>
			)
		}else {
			return(
				<Modal footer={null} title="登录" width = '330px' wrapClassName='loginBox' visible={this.props.visiable} onOk={this.handleOk} onCancel={this.handleCancel}>
					<Form onSubmit={this.handleSubmit}>
				        <FormItem>
				          {getFieldDecorator('userName', {
				            rules: [{ required: true, message: 'Please input your username!' }],
				          })(
				            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
				          )}
				        </FormItem>
				        <FormItem>
				          {getFieldDecorator('password', {
				            rules: [{ required: true, message: 'Please input your Password!' }],
				          })(
				            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
				          )}
				        </FormItem>
				        <FormItem>
				          <Button type="primary" htmlType="submit" className="login-form-button">
				            Log in
				          </Button>
				          <p className='des'><a href="javascript:;"  onClick={()=>this.showModal(0)}>register now!</a></p>
				        </FormItem>
				     </Form>
		        </Modal>
			)
		}
		
	}

}

const LoginModal = Form.create()(HorizontalLoginForm);


export default LoginModal;