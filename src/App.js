import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, HashRouter} from 'react-router-dom';

import LoginPage from './pages/login-page';
import SignupPage  from './pages/signup-page';
import HomePage from './pages/home-page';
import PageNotFound from './pages/page-not-found';

import ProtectedRoute from './components/protected-route';

import 'antd/dist/antd.css';

class App extends Component {
 
  render() {
    return (
      <HashRouter>
        <Switch>
          
          <Route path="/" exact component={LoginPage} ></Route>
          <Route path="/register" component={SignupPage}></Route>
          <ProtectedRoute path="/home" component={HomePage}></ProtectedRoute>

          <Route component={PageNotFound}></Route>

        </Switch>
      </HashRouter>
    );
  }

}

export default App;