import React, { Component } from 'react';
import 'styles/Login.scss';

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
            <div className="card-header"><Icon.User /> Logowanie</div>
            <div className="card-body text-center">
              <img className="cenLogo img-fluid" src={logo}/>
              <form id="login-form">
                <div className="form-group">
                  <Input placeholder="Nazwa" type="text" />
                </div>
                <div className="form-group">
                  <Input placeholder="Hasło" type="password" />
                </div>
                  <Button text="Zaloguj" type="submit"/>
              </form>
              <a href="#"><p className="passReset mt-3">Zapomniałem hasła</p></a>
              <hr className="cenHr" />
              <p>Nie posiadasz jeszcze konta?</p>
              <a href="#"><p>Zarejestruj się!</p></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;