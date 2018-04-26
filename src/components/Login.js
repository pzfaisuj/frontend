import React, { Component } from 'react';
import './Login.css';
import Input from './Input.js';
import Button from './Button.js';
import elo from './logo_1.png';

class Login extends Component {
  render() {
    return ( 
      <div class="loginWrapper">
        <img class="cenLogo" src={elo} />
        <br />
        <Input placeholder="Nazwa" type="text" />
          <br />
        <Input placeholder="Hasło" type="password" />
        <br />
        <Button text="Zaloguj"/>
        <br />
        <a href="#"><p class="passReset">Zapomniałem hasła</p></a>
        <hr class="cenHr" />
        <p>Nie posiadasz jeszcze konta?</p>
        <a href="#"><p>Zarejestruj się!</p></a>
      </div>
    );
  }
}

export default Login;