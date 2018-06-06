import React, { Component } from 'react';
import {Icon} from 'react-font-awesome-5';

export default class Searcher extends Component {
    render() {
        return (
          <form>
            <div className="input-group mb-4 input-group search-product">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><Icon.Search /></span>
                </div>

                <input type="text" onChange={this.props.updateSearch} className="form-control" id="product" placeholder="Wpisz nazwę szukanego produktu" aria-label="product" aria-describedby="basic-addon1" />

                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Szukaj</button>
                </div>
            </div>
        </form>
        );
    }
}
