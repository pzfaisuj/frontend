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
                                <AddProductInput title="Cena sprzedaży" type="text" placeholder="Cena sprzedaży produktu *" errorText="Cena sprzedaży produktu jest wymagana." id="product-sell-price" name="product-sell-price" />
                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                                <AddProductInput title="Kod produktu" type="text" placeholder="Podaj kod produktu *" errorText="Kod produktu jest wymagany." id="product-code" name="product-code" />
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
                            <div className="form-group">
                                    <label for="form_photo_url"><h4>Url zdjęć : </h4></label>
                                    <textarea id="form_photo_url" name="photo_url" className="form-control" placeholder="www.przyklad1.com, www.przykład2.com" rows="3" data-error="Prosze podać linki do zdjęć." required></textarea>
                                    <div className="help-block with-errors"></div>
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