import React, { Component } from 'react';

import AddProductInput from './addProductInput';

export default class AddProduct extends Component {
    render() {
      return (
        <div className="card">
            <div className="card-header bg-transparent">
                <h3 className="text-center mb-2">Dodaj produkt</h3>
            </div>

            <div className="card-body">
                <form id="addProduct-form" method="POST" role="form">
                    <div className="message"></div>
                    <div className="controls">
                        <div className="row">
                            <div className="col-md-6">
                                <AddProductInput title="Nazwa produktu" type="text" placeholder="Podaj nazwę produktu *" errorText="Nazwa produktu jest wymagana." id="product-name" name="product-name" />
                            </div>
                            <div className="col-md-6">
                                <AddProductInput title="Kod produktu" type="text" placeholder="Podaj kod produktu *" errorText="Kod produktu jest wymagany." id="product-code" name="product-code" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <AddProductInput title="Cena zakupu" type="text" placeholder="Cena zakupu produktu *" errorText="Cena zakupu produktu jest wymagana." id="product-buy-price" name="product-buy-price" />
                            </div>
                            <div className="col-md-6">
                                <AddProductInput title="Cena sprzedaży" type="text" placeholder="Cena sprzedaży produktu *" errorText="Cena sprzedaży produktu jest wymagana." id="product-sell-price" name="product-sell-price" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="form_description"><h4>Opis produktu</h4></label>
                                    <textarea id="form_description" name="description" className="form-control" placeholder="Opis produktu *" rows="8" data-error="Prosze podać opis produktu." required></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group ">
                                    <label for="fileupload"><h4>Zdjęcie produktu</h4></label>
                                    <input type="file" className="form-control-file " id="fileupload" aria-describedby="fileupload" multiple />
                                    <small id="fileupload" className="form-text text-muted">Dodaj jedno lub więcej zdjęć produktu.</small>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12">
                                <input type="submit" className="btn btn-success btn-send " value="Dodaj produkt"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12">
                                <p className="text-muted"><strong>*</strong> Pola oznaczone tym znakiem są wymagane.</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      );
    }
}
