import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginPage from './pages/login-page';
import SignupPage  from './pages/signup-page';
import HomePage from './pages/home-page';

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
        <Switch>
          
          <Route path="/login" component={LoginPage} ></Route>
          <Route path="/register" component={SignupPage}></Route>
          <Route path="/home" component={HomePage}></Route>

        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;