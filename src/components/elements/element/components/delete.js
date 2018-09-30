import React, { Component } from 'react';


export class Delete extends Component {

render() {

    const {
      deleteInvoiceInDelete,
      id
    } = this.props


    let deleteInvoiceInDeleteComponent=(id)=>{
      deleteInvoiceInDelete(id)
    }


    return (

        <button type="button" name="add" className="delete-button" onClick={()=>{deleteInvoiceInDelete(id)}}>
          <img src="https://png.icons8.com/small/16/cccccc/cancel.png"/>
        </button>

      );
  }
}
