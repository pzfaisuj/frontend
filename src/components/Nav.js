import React, { Component } from 'react';

import Input from './loginPage/Input.js';
import Button from './loginPage/Button.js';
import {FormErrors} from './loginPage/FormErrors.js'

import logo from '../images/logo.png';
import {Icon} from 'react-font-awesome-5';

import 'styles/Nav.css';

import { NavLink as Link } from 'react-router-dom';

export default class Nav extends Component {

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

 
    getInitialState () {
        return {
            isChecked: false
        };
    }
    
    componentWillMount () {
        this.id = `toggle_${Math.random().toString().replace(/0\./, '')}`;
    }
     
    handleChange () {
        this.setState({isChecked: !this.state.isChecked});
        console.log('CHANGE!');
    }
     


  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="CenUJ_logo" height="80"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto" id="navbarSupportedContent">
                    <li className="nav-item">
                        <Link exact to="/cocpit" className="nav-link" activeClassName="active">
                            <Icon.Home /> Kokpit
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addProduct" className="nav-link">
                            <Icon.PlusCircle /> Dodaj produkt
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addDomain" className="nav-link">
                            <Icon.PlusCircle /> Dodaj domenę
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <form className="form-inline" id="login-form">
                            
                                <div className="form-box d-inline-block text-left">
                                    <Input className={`form-control input2 ${this.errorClass(this.state.formErrors.email)}`} placeholder="Email" name="email" size="25" required="required" type="email" value={this.state.email} changed={this.handleUserInput}/> 
                                    <br />
                                    <div className="d-inline">
                                    <input onChange={this.handleChange} id={this.id} type="checkbox" checked={this.state.isChecked} />
                                    <label className="d-inline greyText" htmlFor={this.id}> Zapamiętaj mnie </label>
                                    </div>
                                    
                                </div>
                                <div className="form-box d-inline-block text-left">
                                    <div className="input-group">
                                        <Input className={`form-control input2 ${this.errorClass(this.state.formErrors.hasło)}`} placeholder="Hasło" name="password" type="password" value={this.state.password} changed={this.handleUserInput}/>
                                        
                                        <div className="input-group-append">
                                            <Button text="Zaloguj" type="submit" disabled={!this.state.formValid}/>
                                        </div>    
                                    </div>
                                    <div className="d-inline" id="rem">
                                        <a href="#" className="greyText"> Zapomniałeś hasła? </a>
                                    </div>
                                 
                                </div>
                                
                        </form>
                    </li>
                </ul>
            </div>
          </nav>
    );
  }
}
