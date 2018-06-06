import React, { Component } from 'react';
import {Icon} from 'react-font-awesome-5';

import axios from 'axios';
import fs from 'fs';
import { NavLink as Link } from 'react-router-dom';
import 'styles/ProductTable.scss';

export default class ProductTable extends Component {


    render() {

      let data = this.props.data.filter(elem => {
        return elem.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
      })

        return (
            <div id="products-table_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
            <div className="row">
               <div className="col-sm-12">
                  <table id="products-table" className="table table-hover dataTable no-footer" role="grid">
                     <thead>
                        <tr role="row">
                           <th className="sorting_asc" tabIndex="0" aria-controls="products-table" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Lp.: aktywuj, by posortować kolumnę malejąco">Lp.</th>
                           <th className="sorting" tabIndex="0" aria-controls="products-table" rowSpan="1" colSpan="1" aria-label="Nazwa produktu: aktywuj, by posortować kolumnę rosnąco">Nazwa produktu</th>
                           <th className="sorting" tabIndex="0" aria-controls="products-table" rowSpan="1" colSpan="1" aria-label="Aktualna cena: aktywuj, by posortować kolumnę rosnąco">Aktualna cena</th>
                           <th className="sorting" tabIndex="0" aria-controls="products-table" rowSpan="1" colSpan="1" aria-label=": aktywuj, by posortować kolumnę rosnąco"></th>
                        </tr>
                     </thead>
                     <tbody>
                     {
                       data.map((el, i) => {
                         return <tr key={i} role="row">
                           <td className="sorting_1">{i+1}.</td>
                           <td><img src={el.imageURL} height={80} />  {el.name}</td>
                           <td><strong>{el.price}</strong> zł</td>
                           <td><Link to={'/productDetails/'+el.productId} >Zobacz szczegóły</Link></td>
                         </tr>
                       })
                     }
                     </tbody>
                  </table>
               </div>
            </div>

         </div>
        );
    }
}
