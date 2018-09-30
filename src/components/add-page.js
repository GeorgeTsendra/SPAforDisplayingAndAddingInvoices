import React, { Component } from 'react';
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";


export class AddPage extends Component {
  constructor(){
    super()
    this.state = {
      serverUrl:  "http://localhost:3004/",
      prefix: "posts/",
      comment: "",
      number: "",
      date_supplied: "",
      date_created: "",
      date_suppliedISO: "",
      classSupl: "data-input",
      classInv: "data-input",
    }
  }

onChangeComments = (event)=>{
  this.setState({
    comment: event.target.value,
  })
}
onChangeNumber = (event)=>{

  this.setState({
    number: event.target.value,
  })

    // incorrectValidNamber
  // console.log(this.state.number);
}


onFocusSupplied= ()=>{
  this.setState({
    classSupl: "full data-input"
  })
}
onFocusInvoise= ()=>{
  this.setState({
    classInv: "full data-input"
  })
}


onChangeSupplied = (event)=>{
// console.log(event.target.value);
  this.setState({
    date_supplied: event.target.value,
  })


}

onChangeCreated = (event)=>{
  this.setState({
    date_created: event.target.value,
  })

}


saveToServer = () =>{
  const url = "http://localhost:3004/";
  const prefix = "posts";

  // console.log(this.state.number.length);


  if (this.state.number.length <= 3) {
    alert("please, your number should have at least 3 symbols")
    return
  }

  let incorrectValidDataSupplied = this.state.date_supplied.split("-");
  let daysSupplied = incorrectValidDataSupplied[2]
  let mounhtSupplied = incorrectValidDataSupplied[1]
  let yearsSupplied = incorrectValidDataSupplied[0]
  let correctValidDataSupplied = [daysSupplied,mounhtSupplied,yearsSupplied ]

  let incorrectValidDatacreated = this.state.date_created.split("-");
  let dayscreated = incorrectValidDatacreated[2]
  let mounhtcreated = incorrectValidDatacreated[1]
  let yearscreated = incorrectValidDatacreated[0]
  let correctValidDatacreated = [dayscreated,mounhtcreated, yearscreated ]
// console.log(incorrectValidDatacreated);
// console.log(correctValidDatacreated);

// console.log(incorrectValidDataSupplied);
// console.log(correctValidDataSupplied);
  fetch(url + prefix, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: Math.random()*1000000000000000000,
      number: +this.state.number,
      date_supplied: correctValidDataSupplied.join("-"),
      date_created: correctValidDatacreated.join("-"),
      comment: this.state.comment,
    })
  })
  .then(response => {
    return response.json()
  })
  .then(response =>{
    this.render()
  })
}


  render() {


    return (
      <React.Fragment>
      <div className="main add-main">
      <div className="header">
        <div className="header-left">
          <h1>Create Invoices</h1>

        </div>
        <div className="header-right header-right-create">
              <div className="header-right-top">
              </div>
              <div className="header-right-left">
              </div>
        </div>
      </div>

      <div className="action">
        <div className="actions actions-form">

            <form className="add-invoices" action="#" method="post">
              <div className="form-top">

                <div className="forms">
                  <label htmlFor="number">Number: </label>
                  <div className="inputs" id="numberInputs">
                    <input type="number" minLength="3" className="numbe-input" placeholder="" onChange={this.onChangeNumber} value={this.state.number}/>

                  <img id="numberImg" src="https://png.icons8.com/cotton/64/000000/settings.png"/>
                  </div>
                </div>

                <div className="forms">
                  <label htmlFor="Invoise">Invoise Date: </label>
                  <div className="inputs">
                    <input type="date" id="Invoise" onFocus={this.onFocusInvoise}  className={this.state.classInv}  placeholder="select date"  onChange={this.onChangeCreated} value={this.state.date_created}/>

                  </div>
                </div>

                <div className="forms">
                  <label htmlFor="Supply">Supply Date: </label>
                  <div className="inputs">
                    <input type="date"  id="Supply" onFocus={this.onFocusSupplied}  className={this.state.classSupl}  placeholder="select date" onChange={this.onChangeSupplied} value={this.state.date_supplied}/>

                  </div>
                </div>



              </div>
              <div className="form-bottom">
                <div className="forms">
                  <label htmlFor="Comment">Comment: </label>

                  <textarea maxLength="160" name="name" type="textarea" id="Comment" rows="10" cols="20" onChange={this.onChangeComments} value={this.state.comments}></textarea>
                </div>
              </div>

            </form>

        </div>

        <div className="actions actions-button">
          <Link to="/main" href="#" onClick={this.saveToServer}>
            <button type="button" name="button">Save</button>
          </Link>
        </div>
      </div>
      </div>

      </React.Fragment>
    );
  }
}
