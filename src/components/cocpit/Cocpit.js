import React, { Component } from 'react';
import {Icon} from 'react-font-awesome-5';
import Searcher from './Searcher.js';
import ProductTable from './ProductTable.js';

export default class Cocpit extends Component {
    render() {
        return (
            <div>
                <div className="card">
                <div className="card-header"><Icon.ShoppingCart /> Moje produkty</div>
                    <div className="card-body">
                    <Searcher />
                    <ProductTable />
                    </div>
                </div>
            </div>
        );
    }
}
  