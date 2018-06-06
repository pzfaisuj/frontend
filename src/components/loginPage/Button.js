import React, { Component } from 'react';
import 'styles/Button.css';

  class Button extends Component {
    render() {
      return (
        <button className="btn cenButton" type={this.props.type} disabled={this.props.disabled} >{this.props.text} </button>
      );
    }
  }
  
  export default Button;