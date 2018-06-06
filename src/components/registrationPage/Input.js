import React, { Component } from 'react';
  
  class Input extends Component {
    render() {
      return (
        <input className={this.props.className} name={this.props.name} placeholder={this.props.placeholder} type={this.props.type} onBlur={this.props.changed}/>
      );
    }
  }
  
  export default Input;