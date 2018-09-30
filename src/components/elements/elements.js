import React, { Component } from 'react';
import {Element} from "./element/element"

export class Elements extends Component {


  render() {

    const {db,
      deleteInvoice,
    } = this.props

    let deleteFromElementsToElement=(id)=>{
      deleteInvoice(id)
    }


  let fromMapToProps = (data)=> {
      let allElements = data.map((value, index, arr)=>{
        return (
          <li key = {index}>
            <Element
            elemData = {value}
            deleteFromElementsToElement = {deleteInvoice}
            />
          </li>
        )
      })
    return  allElements;
  }


    return (
      <React.Fragment>
      <ul>
        <li>
          <ul className="top-ul">
            <li>Create</li>
            <li>No</li>
            <li>Supply</li>
            <li>Comment</li>
            <li className="functional">Options</li>
        </ul>
       </li>
        {fromMapToProps(db)}
      </ul>

        </React.Fragment>

    );
  }
}
