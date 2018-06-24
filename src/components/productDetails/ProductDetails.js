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
    let price = null;

    if(this.state.isImageLoaded) {
      loading = null;
      info = (
        <div className="info">
              <div className="row">
                <div className="price col-md-12">
                  <h3> <strong> {this.state.item.name} </strong></h3>
                  <h1 className="price-text-color">{this.state.item.price} zł</h1>
                  <div className="col-sm-8 list">
                    <h5>Dane techniczne:</h5>
                      <ul>
                        {this.state.details.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                </div>
              </div>
              <div className="separator clear-left">         
               
              </div>
        </div>
      );
      price = (
        <div className="row section-price">
       
        <button type="button" className="btn btn-link btn-xs">
          <Icon.History /><span className="hidden-sm">Historia ceny</span>
        </button>
      </div>
      );
    }

    return (
      <div className="container">
        <div className="container row">
        {loading}
          <div className="col-sm-4">
            <div className="col-item">
              <div className="photo">
                <img src={this.state.item.imageURL} className="img-responsive"
                  onLoad={this.handleImageLoaded.bind(this)}/>
              </div>
            </div>
            {price}
          </div>
          {info}
          
        </div>
      </div>
      );
    }
}
