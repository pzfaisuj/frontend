import React, { Component } from 'react';
import axios from 'axios';


export default class AddDomainForm extends Component {

    myClick(id, e){
        axios({
          method: 'delete',
          url: `http://localhost:8095/domain/${id}`,
        }).then((res) => {
            alert("usunieto");
            window.location.reload();
        }).catch((err) => {
          alert('AXIOS addProduct FAILED', err)
        });
    };

    render() {
        return (
            <div>
                <form id="addProduct-form" onSubmit={this.props.addDomain}>
            <div className="message"></div>
            <div className="controls">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="productName">
                                <h4>Nazwa domeny</h4>
                            </label>
                            <input id="name" type="text" name="name" className="form-control" placeholder="Podaj nazwę domeny *" data-error="Nazwa produktu jest wymagana."
                                required/>
        
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12">
                        <p className="text-muted">
                            <strong>*</strong> Pola oznaczone tym znakiem są wymagane.</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12">
                        <input type="submit" className="btn btn-success btn-send " value="Dodaj nową domenę" />
                    </div>
                </div>
                <br />
               
            </div>
        </form>
        <div>
        <div className="col-sm-12">
                  <table id="products-table" className="table table-hover dataTable no-footer" role="grid">
                     <thead>
                        <tr role="row">
                           <th>Nazwa domeny</th>
                        </tr>
                     </thead>
                     <tbody>
                     {
                       this.props.domainTable.map((el, i) => {
                         return <tr key={i} role="row">
                           <td>  {el.name}</td>
                           <td>
                                <button key={i} id={`${el.name}`} onClick={this.myClick.bind(this,el.name)} className="btn btn-danger">usuń domenę</button>
                            </td>
                         </tr>
                       })
                     }
                     </tbody>
                  </table>
               </div>
        </div>
            </div>
        )
    }
}
