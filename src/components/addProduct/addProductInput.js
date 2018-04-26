import React, { Component } from 'react';
  
export default class AddProductInput extends Component {
    render() {
        const title = this.props.title;
        const type = this.props.type;
        const placeholder = this.props.placeholder;
        const errorText = this.props.errorText;
        const id = this.props.id;
        const name = this.props.name;

        return (
            <div className="form-group">
                <label for={id}><h4>{title}</h4></label>
                <input id={id} type={type} name={name} className="form-control" placeholder={placeholder} data-error={errorText} required/>
                
                <div className="help-block with-errors"></div>
            </div>
        )
    }
}