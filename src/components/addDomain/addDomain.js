import React, { Component } from 'react';

import AddDomainForm from './AddDomainForm';
import axios from 'axios';

export default class AddProduct extends Component {
    constructor() {
        super();
    
        this.state = {
          data: []
        }
      }

addDomain = (e) => {
    e.preventDefault();
    const domainName = e.target.elements.name.value;
    const dt = JSON.stringify({"name":domainName});
    console.log('domainName: ' + dt);
    axios({
        method: 'post',
        url: 'http://localhost:8095/domain',
        headers: {
            'Content-Type': 'application/json',
        },
        data: dt
      }).then((res) => {
          alert('dodano domenę');
          window.location.reload();
      }).catch((err) => {
        alert('AXIOS addProduct FAILED', err);
      });
}

componentDidMount() {
    // axios
    axios({
    method: 'get',
    url: 'http://localhost:8095/domain'
  }).then((res) => {
    this.setState({
        data: res.data
      });
  }).catch((err) => {
    alert('AXIOS addProduct FAILED', err)
  });
   
  }

    render() {
      return (
        <div className="card">
            <div className="card-header bg-transparent">
                <h3 className="text-center mb-2">Dodaj domenę</h3>
            </div>

            <div className="card-body">
                <AddDomainForm addDomain={this.addDomain} domainTable={this.state.data}/>
            </div>
        </div>
      );
    }
}