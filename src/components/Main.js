import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './Nav.js';
import Footer from './Footer.js';

import Login from './loginPage/Login.js';
import Registration from './registrationPage/Registration.js';
import Cocpit from './cocpit/Cocpit.js';
import AddProduct from './addProduct/addProduct.js';
import ProductDetails from './productDetails/ProductDetails.js';


class AppComponent extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <div className="row">
            <div className="col-12">
              <Route exact path="/" component={Cocpit} />
              <Route path="/addProduct" component={AddProduct} />
              <Route path="/login" component={Login} />
              <Route path="/registration" component={Registration} />
              <Route path="/productDetails/:id" component={ProductDetails} />
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default AppComponent;
