import React, { Component } from 'react';
import {Icon} from 'react-font-awesome-5';
import Searcher from './Searcher.js';
import ProductTable from './ProductTable.js';

import axios from 'axios';

export default class Cocpit extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: ''
    }

    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0,20)
    })
  }

  componentDidMount() {
    // axios
    axios.get(`temp_base.json`)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
  }

    render() {
        return (
            <div>
                <div className="card">
                <div className="card-header"><Icon.ShoppingCart /> Moje produkty </div>
                    <div className="card-body">
                    <Searcher updateSearch={this.updateSearch.bind(this)} />
                    <ProductTable search={this.state.search} data={this.state.data}/>
                    </div>
                </div>
            </div>
        );
    }
}
