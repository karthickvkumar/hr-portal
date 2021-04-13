import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1>The page youre looking is not available</h1>
        <NavLink to="/"><h3>Go back</h3></NavLink>
      </div>
    );
  }
}

export default PageNotFound;