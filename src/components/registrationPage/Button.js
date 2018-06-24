import React, { Component } from 'react';

  class Button extends Component {
    render() {
      return (
        <button className="btn btn-info" type={this.props.type} disabled={this.props.disabled}>{this.props.text} </button>
      );
    }
  }
  
  export default Button;