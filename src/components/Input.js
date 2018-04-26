import React, { Component } from 'react';
import './Input.css';
  
  class Input extends Component {
    render() {
      return ( 
        <input class="cenInp" placeholder={this.props.placeholder} type={this.props.type} />
      );
    }
  }
  
  export default Input;