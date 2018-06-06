import React, { Component } from 'react';
import {Icon} from 'react-font-awesome-5';

export default class ProductDetails extends Component {

  render() {
    return (
      <div>
        Do skończenia<br/>
        Id produktu: {this.props.match.params.id}
      </div>
    );
  }
}
