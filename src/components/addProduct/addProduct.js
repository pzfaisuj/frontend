import React, { Component } from 'react';

import AddProductForm from './AddProductForm';
import axios from 'axios';

export default class AddProduct extends Component {

addProduct = (e) => {
    e.preventDefault();
    const productName = e.target.elements.productName.value;
    const productSellPrice = e.target.elements.productSellPrice.value;
    const productCode = e.target.elements.productCode.value;
    const formDescription = e.target.elements.formDescription.value;
    const photoUrl = e.target.elements.photoUrl.value;
    console.log('sell price: ' + productSellPrice);
    console.log('product name: ' + productName);
    console.log('product code: ' + productCode);
    console.log('description: ' + formDescription);
    console.log('photoUrl: ' + photoUrl);

    axios.post('/addProduct', {
        productName: productName ,
        productSellPrice: productSellPrice ,
        productCode: productCode ,
        formDescription: formDescription ,
        photoUrl: photoUrl
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}

    render() {
      return (
        <div className="card">
            <div className="card-header bg-transparent">
                <h3 className="text-center mb-2"> Dodaj produkt</h3>
            </div>

            <div className="card-body">
                <AddProductForm addProduct={this.addProduct} />
            </div>
        </div>
      );
    }
}
