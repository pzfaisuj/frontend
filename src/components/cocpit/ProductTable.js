import React, { Component } from 'react';
import {Icon} from 'react-font-awesome-5';

export default class ProductTable extends Component {
    render() {
        return (
            <div id="products-table_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
            <div className="row">
               <div className="col-sm-12">
                  <table id="products-table" className="table table-striped table-hover dataTable no-footer" role="grid">
                     <thead>
                        <tr role="row">
                           <th className="sorting_asc" tabIndex="0" aria-controls="products-table" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Lp.: aktywuj, by posortować kolumnę malejąco">Lp.</th>
                           <th className="sorting" tabIndex="0" aria-controls="products-table" rowSpan="1" colSpan="1" aria-label="Nazwa produktu: aktywuj, by posortować kolumnę rosnąco">Nazwa produktu</th>
                           <th className="sorting" tabIndex="0" aria-controls="products-table" rowSpan="1" colSpan="1" aria-label="Aktualna cena: aktywuj, by posortować kolumnę rosnąco">Aktualna cena</th>
                           <th className="sorting" tabIndex="0" aria-controls="products-table" rowSpan="1" colSpan="1" aria-label=": aktywuj, by posortować kolumnę rosnąco"></th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr role="row" className="odd">
                           <td className="sorting_1">1.</td>
                           <td>Lorem ipsum</td>
                           <td>20.99 zł</td>
                           <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                        <tr role="row" className="even">
                           <td className="sorting_1">2.</td>
                           <td>Cras egestas</td>
                           <td>34.50 zł</td>
                           <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                        <tr role="row" className="odd">
                           <td className="sorting_1">3.</td>
                           <td>Sed tempor</td>
                           <td>26.00 zł</td>
                           <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                        <tr role="row" className="even">
                           <td className="sorting_1">4.</td>
                           <td>Nullam vulputate</td>
                           <td>8.99 zł</td>
                           <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                        <tr role="row" className="odd">
                           <td className="sorting_1">5.</td>
                           <td>Pellentesque ac</td>
                           <td>14.50 zł</td>
                           <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                        <tr role="row" className="even">
                           <td className="sorting_1">6.</td>
                           <td>Nulla vel</td>
                           <td>6.00 zł</td>
                           <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>

         </div>
        );
    }
}
  