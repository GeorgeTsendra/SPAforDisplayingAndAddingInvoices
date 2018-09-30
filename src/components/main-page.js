import React, { Component } from 'react';
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";
import {AddPage} from "./add-page"
import {Elements} from './elements/elements'

export class MainPage extends Component {
  constructor(){
    super()
    this.state = {
      serverUrl:  "http://localhost:3004/",
      prefix: "posts/",
      db: [],
    }
  }

  getPostsFromServer = () => {
    const serverUrl = this.state.serverUrl;
    const prefix = this.state.prefix;

    fetch(serverUrl + prefix, {
    })
    .then(response =>{
      return response.json();
    })
    .then(response =>{
      this.setState({
        db: response,
      });
    })
  }


componentDidMount(){
  this.getPostsFromServer()
}


deleteInvoice = (user_id) => {
  const serverUrl = this.state.serverUrl;
  const prefix = this.state.prefix;

  return fetch(serverUrl + prefix + user_id, {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'delete'
    })
    .then(response =>{
      this.getPostsFromServer()
    })
}


  render() {
	this.getPostsFromServer()
    return (
      <React.Fragment>
      <div className="main">
       <div className="header">
        <div className="header-left">
          <h1>Invoices</h1>

        </div>
        <div className="header-right">
              <div className="header-right-top">
              </div>
              <div className="header-right-left">
              </div>
        </div>
      </div>

      <div className="action">
        <p>Actions</p>
        <div className="button-div">
          <Link to="/add" href="#" id="a_header">

            <button type="button" name="add" className="add-button" >
              Add new
            </button>
          </Link>
        </div>
      </div>

      <div className="main-invoices-block">
        <p>Invoices</p>

        <Elements db={this.state.db}
                  deleteInvoice={this.deleteInvoice}
        />

       </div>
      </div>
      </React.Fragment>
    );

  }
}
