import React, { Component } from 'react';
import {Icon} from 'react-font-awesome-5';
import 'styles/ProductDetails.css';

import axios from 'axios';
import fs from 'fs';
import Spinner from './../Spinner/Spinner';

export default class ProductDetails extends Component {

  state= {
    item: {},
    details: [],
    isImageLoaded: false,
  }
  
 componentDidMount() {
    axios.get(`/data/temp_base.json`, {
      params: {
        productId: this.props.match.params.id
      }
    }).then(res => {
        const product = res.data.find(p => p.productId == this.props.match.params.id);
        this.setState( { item: product,
          details: product.description.split(',') });
      })
  }
 
  handleImageLoaded() {
    this.setState({ isImageLoaded: true });
  }

  render() {
    let loading = <Spinner/>;
    let info = null;
    let details = null;

    if(this.state.isImageLoaded) {
      loading = null;
      info = (
        <div className="info">
              <div className="row">
                <div className="price col-md-12">
                  <h5>{this.state.item.name}</h5>
                </div>
              </div>
              <div className="separator clear-left">         
                <div className="row section-price">
                  <h5 className="price-text-color">{this.state.item.price} zł</h5>
                  <button type="button" className="btn btn-link btn-xs">
                    <Icon.History /><span className="hidden-sm">Historia ceny</span>
                  </button>
                </div>
              </div>
            </div>
      );
      details = (
        <div className="col-sm-8 list">
        <h5>Dane techniczne:</h5>
          <ul>
            {this.state.details.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      );
    }

    return (
      <div className="row">
      {loading}
        <div className="col-sm-4">
          <div className="col-item">
            <div className="photo">
              <img src={this.state.item.imageURL} className="img-responsive"
                onLoad={this.handleImageLoaded.bind(this)}/>
            </div>
            {info}
          </div>
        </div>
        {details}
      </div>
      );
    }
}
