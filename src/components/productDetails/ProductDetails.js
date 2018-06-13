import React, { Component } from 'react';
import {Icon} from 'react-font-awesome-5';

import axios from 'axios';
import fs from 'fs';

export default class ProductDetails extends Component {
  
  // componentDidMount() {
  //   // axios
  //   axios.get(`/data/temp_base.json`, {
  //     params: {
  //       productId: this.props.match.params.id
  //     }
  //   }).then(res => {
  //     console.log(res);
  //       this.setState({
  //         data: res.data
  //       });
  //     })
     
  // }

  render() {

    return (
      <div>
      
        Do skończenia<br/>
        Id produktu: {this.props.match.params.id}
 
      </div>
    );
  }
}
