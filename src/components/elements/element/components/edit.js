import React, { Component } from 'react';
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";

export class Edit extends Component {

  render() {

    const {
      id,
      comment,
      date_supplied,
      number,
      date_created
    } = this.props


    return (

        <button type="button" name="edit" className="edit-button" >
         <Link to={{
           pathname: "/edit",
           state: {
             linkId: id,
             linkcomment: comment,
             linkdate_supplied: date_supplied,
             linknumber: number,
             linkdate_created: date_created,
           }
         }} id="a_header">
          <img src="https://png.icons8.com/small/16/cccccc/multi-edit.png"/>
         </Link>
        </button>


    );
  }
}
