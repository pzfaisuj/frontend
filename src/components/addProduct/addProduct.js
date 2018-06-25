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
    const links = e.target.elements.links.value;
      const dt = JSON.stringify(
        {
            name: productName,
            price: productSellPrice,
            productCode: productCode,
            description: formDescription,
            imageURL: photoUrl,
            link: links.split(/\s*,\s*/g)
        }
    );
      console.log('product: ' + dt);
      axios({
          method: 'post',
          url: 'http://localhost:8095/products',
          headers: {
              'Content-Type': 'application/json',
          },
          data: dt
        }).then((res) => {
            alert('dodano produkt');
            console.log(res);
            window.location.reload();
        }).catch((err) => {
          alert('AXIOS addProduct FAILED', err);
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
