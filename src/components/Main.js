import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './Nav.js';

import Login from './loginPage/Login.js';
import Cocpit from './cocpit/Cocpit.js';
import AddProduct from './addProduct/addProduct.js';


class AppComponent extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Nav />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Route exact path="/" component={Cocpit} />
              <Route path="/addProduct" component={AddProduct} />
              <Route path="/login" component={Login} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default AppComponent;
