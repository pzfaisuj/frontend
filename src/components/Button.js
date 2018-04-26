import React, { Component } from 'react';
import './Button.css';
import './Login.js';
  
  class Button extends Component {
    render() {
      return ( 
        <button class="cenButton">{this.props.text}</button>
      );
    }
  }
  
  export default Button;