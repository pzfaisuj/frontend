import React, { Component } from 'react';
import 'styles/Login.scss';

import Input from './Input.js';
import Button from './Button.js';
import {FormErrors} from './FormErrors.js'

import {Icon} from 'react-font-awesome-5';
import { NavLink as Link } from 'react-router-dom';
import logo from '../../images/logo.png';

class Login extends Component {

  state = {
    email: '',
    password: '',
    formErrors: {email: '', hasło: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false
  }

  handleUserInput = (e) => {
    console.log(e.target)
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let password = this.state.password;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' jest nieprawidłowy';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.hasło = passwordValid ? '': ' musi zawierac co najmniej 6 znakow';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'is-invalid');
 }

  render() {
    return (
      <div className="row justify-content-md-center my-5">
        <div className="col-md-12 col-lg-6 col-xl-4">
          <div className="card">
            <div className="card-header"><Icon.User /> Logowanie</div>
            <div className="card-body text-center">
              <img className="cenLogo img-fluid" src={logo}/>
              <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
              <form id="login-form">
                <div className="form-group">
                <Input className={`form-control ${this.errorClass(this.state.formErrors.email)}`} placeholder="Email" name="email" type="email" value={this.state.email} changed={this.handleUserInput}/>
                </div>
                <div className="form-group">
                <Input className={`form-control ${this.errorClass(this.state.formErrors.hasło)}`} placeholder="Hasło" name="password" type="password" value={this.state.password} changed={this.handleUserInput}/>
                </div>
                  <Button text="Zaloguj" type="submit" disabled={!this.state.formValid}/>
              </form>
              <a href="#"><p className="passReset mt-3">Zapomniałem hasła</p></a>
              <hr className="cenHr" />
              <p>Nie posiadasz jeszcze konta?</p>
              <Link to="/registration" className="nav-link">
                Zarejestruj się!
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;