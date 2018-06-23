import React, { Component } from 'react';

export default class AddProductForm extends Component {
    render() {


        return (
            <form id="addProduct-form" onSubmit={this.props.addProduct}>
            <div className="message"></div>
            <div className="controls">
                <div className="row">
                    <div className="col-md-6">
        
        
        
        
                        <div className="form-group">
                            <label htmlFor="productName">
                                <h4>Nazwa produktu</h4>
                            </label>
                            <input id="productName" type="text" name="productName" className="form-control" placeholder="Podaj nazwę produktu *" data-error="Nazwa produktu jest wymagana."
                                required/>
        
                            <div className="help-block with-errors"></div>
                        </div>
        
        
        
        
        
        
        
        
                    </div>
                    <div className="col-md-6">
        
        
        
        
                        <div className="form-group">
                            <label htmlFor="productSellPrice">
                                <h4>Cena sprzedaży</h4>
                            </label>
                            <input id="productSellPrice" type="text" name="productSellPrice" className="form-control" placeholder="Cena sprzedaży produktu *"
                                data-error="Cena sprzedaży produktu jest wymagana." required/>
        
                            <div className="help-block with-errors"></div>
                        </div>
        
        
        
        
                    </div>
        
                </div>
                <div className="row">
                    <div className="col-md-12">
        
        
        
                        <div className="form-group">
                            <label htmlFor="productCode">
                                <h4>Kod produktu</h4>
                            </label>
                            <input id="productCode" type="text" name="productCode" className="form-control" placeholder="Podaj kod produktu *" data-error="Kod produktu jest wymagany."
                                required/>
        
                            <div className="help-block with-errors"></div>
                        </div>
        
        
        
        
        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="formDescription">
                                <h4>Opis produktu</h4>
                            </label>
                            <textarea id="formDescription" name="formDescription" className="form-control" placeholder="Opis produktu *" rows="8" data-error="Prosze podać opis produktu."
                                required></textarea>
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="photoUrl">
                                <h4>URL zdjęcia : </h4>
                            </label>
                            <textarea id="photoUrl" name="photoUrl" className="form-control" placeholder="www.przyklad.com" rows="3" data-error="Prosze podać link do zdjęcia."
                                required></textarea>
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12">
                        <input type="submit" className="btn btn-success btn-send " value="Dodaj produkt" />
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12">
                        <p className="text-muted">
                            <strong>*</strong> Pola oznaczone tym znakiem są wymagane.</p>
                    </div>
                </div>
            </div>
        </form>
        )
    }
}
