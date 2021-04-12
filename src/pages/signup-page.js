import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignupPage extends Component {
  render() {
    return (
      <div>
        <h2>SignUp Page</h2>
        <NavLink to="/login">Go back to Login page</NavLink>
        <br></br>
        <NavLink to="/home">Go to Home page</NavLink>
      </div>
    );
  }
}

export default SignupPage;