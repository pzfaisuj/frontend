import React, { Component } from 'react';
import 'styles/Registration.scss';

import Input from './Input.js';
import Button from './Button.js';
import {FormErrors} from './FormErrors.js'

import {Icon} from 'react-font-awesome-5';
import logo from '../../images/logo.png';


class Login extends Component {

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    formErrors: {email: '', hasło: '', hasła: ''},
    emailValid: false,
    passwordValid: false,
    confirmPasswordValid: false,
    formValid: false
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' jest nieprawidłowy';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.hasło = passwordValid ? '': ' musi zawierac co najmniej 6 znakow';
        break;
      case 'confirmPassword':
      confirmPasswordValid = (password === confirmPassword) ;
        fieldValidationErrors.hasła = confirmPasswordValid ? '': ' rożnią się';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    confirmPasswordValid: confirmPasswordValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'is-invalid');
 }

 render() {
  return (
    <main role="main">
    
    <div className="jumbotron container text-left">
      <div className="row">
        <div className="col-md-8 text-justify text-center">
        
          <img className="cenLogo img-fluid mx-auto d-block" src={logo}/>
          <br />
          <h3>Cena jest tym, co płacisz. <br />Wartość jest tym, co otrzymujesz.</h3>
          <p> - Warren Buffet</p>
        </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header"><Icon.UserPlus /> Rejestracja</div>
          <div className="card-body text-center">
          
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
              <div className="form-group">
                <Input className={`form-control ${this.errorClass(this.state.formErrors.hasła)}`} placeholder="Powtórz hasło" name="confirmPassword" type="password" value={this.state.repassword} changed={this.handleUserInput} />
              </div>
                <Button text="Zarejestruj" type="submit" disabled={!this.state.formValid}/>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    </main>
  );
}
}

export default Login;