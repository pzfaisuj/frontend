import React, { Component } from 'react';
  
  class Input extends Component {
    render() {
      return (
        <input className="form-control" placeholder={this.props.placeholder} type={this.props.type} />
      );
    }
  }
  
  export default Input;