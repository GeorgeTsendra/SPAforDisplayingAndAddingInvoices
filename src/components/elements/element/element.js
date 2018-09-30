import React, { Component } from 'react';
import {Delete} from "./components/delete"
import {Edit} from "./components/edit"

export class Element extends Component {



  render() {

    const {
      elemData,
      key,
      deleteFromElementsToElement
    } = this.props;

    let deleteInvoiceFromElementToDelete = (id)=>{
      deleteFromElementsToElement(id)
    }




    return (


        <ul>
          <li>{elemData.date_created}</li>
          <li>INV-{elemData.number}</li>
          <li>{elemData.date_supplied}</li>
          <li>{elemData.comment}</li>
          <li className="functional">
            <Delete
              deleteInvoiceInDelete = {deleteInvoiceFromElementToDelete}
              id = {elemData.id}
            />
            <Edit
              id = {elemData.id}
              comment = {elemData.comment}
              date_supplied = {elemData.date_supplied}
              number = {elemData.number}
              date_created = {elemData.date_created}
            />
          </li>
        </ul>


    );
  }
}
