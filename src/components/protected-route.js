import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
  render() {
    let isAuthenticate = localStorage.getItem('authentication');
    let Component = this.props.component;
    
    return (
      isAuthenticate == 'true' ? <Component></Component> : <Redirect path='/'></Redirect>
    );
  }
}

export default ProtectedRoute;