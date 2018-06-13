import React, { Component } from 'react';

import logo from '../images/logo.png';
import {Icon} from 'react-font-awesome-5';

import { NavLink as Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="" height="80"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/addProduct" className="nav-link">
                            <Icon.PlusCircle /> Dodaj produkt
                        </Link>
                    </li>
                
                    <li className="nav-item">
                        <Link exact to="/" className="nav-link" activeClassName="active">
                            <Icon.Home /> Kokpit
                        </Link>
                    </li>
                </ul>
            </div>
          </nav>
    );
  }
}
