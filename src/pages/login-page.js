import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../css/login-styles.css';
import Api from '../services/api';


class LoginPage extends Component {

  componentWillMount(){
    if(localStorage.getItem('authentication') == 'true'){
      this.props.history.push('/home');
    }
  }

   onFinish = async (value) => {
    console.log('Received values of form: ', value);
    const url = "https://vcentry.herokuapp.com/api/login";
    localStorage.setItem('user-data', JSON.stringify(value));
    const response = await Api.postAPI(url, value)
    
    if(response.status = 200){
      localStorage.setItem('authentication', true)
      this.props.history.push('/home');
    }else{
      localStorage.setItem('authentication', false)
      console.log('error')
    }
  }

  render() {
    return (
      <div className="align">
        <h1>Login Page</h1>
        <div className="align-form">
        <Form
          name="normal_login"
          className="login-form"
          onFinish={this.onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email ID',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email ID" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
        </div>
        <div>
          <NavLink to="/register">Don't have an account, go to Signup page</NavLink>
        </div>
      </div>
    );
  }
}

export default LoginPage;