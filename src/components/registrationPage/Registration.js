import React, { Component } from 'react';
import 'styles/Registration.scss';

import Input from './Input.js';
import Button from './Button.js';

import {Icon} from 'react-font-awesome-5';

import logo from '../../images/logo.png';

class Login extends Component {
  render() {
    return (
      <div className="row justify-content-md-center my-5">
        <div className="col-md-12 col-lg-6 col-xl-4">
          <div className="card">
            <div className="card-header"><Icon.UserPlus /> Rejestracja</div>
            <div className="card-body text-center">
              <img className="cenLogo img-fluid" src={logo}/>
              <form id="login-form">
                <div className="form-group">
                  <Input placeholder="Nazwa" type="text" />
                </div>
                <div className="form-group">
                  <Input placeholder="Hasło" type="password" />
                </div>
                <div className="form-group">
                  <Input placeholder="Powtórz hasło" type="password" />
                </div>
                  <Button text="Zarejestruj" type="submit"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;