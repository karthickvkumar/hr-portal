import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class LoginPage extends Component {

  onLogin(){
    const url = "https://vcentry.herokuapp.com/api/login";
    const data = {
      "password" : "ttest!22334"
    }
    axios.post(url, data)
         .then((response) => {
            console.log(response)
         })
         .catch((error) => {
            console.log(error)
         }) 
  }

  render() {
    // "https://vcentry.herokuapp.com/api/login" - POST
    // {
    //   "email" : '',
    //   "passowrd" : ''
    // }
    return (
      <div>
        <h1>Login Page</h1>
        <button onClick={() => this.onLogin()}>LOGIN</button>
        <br></br>
        <NavLink to="/register">Don't have an account, go to Signup page</NavLink>
      </div>
    );
  }
}

export default LoginPage;