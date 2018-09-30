import React, { Component } from 'react';
import {Link} from "react-router-dom";


export class EditPage extends Component {
  constructor(){
    super()
    this.state = {
      id : "",
      comment: "",
      number: "",
      date_supplied: "",
      date_created: "",
      classSupl: "data-input",
      classInv: "data-input",

    }
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

onChangeComments = (event)=>{
  this.setState({
    comment: event.target.value,
  })
}

onChangeNumber = (event)=>{

  this.setState({
    number: event.target.value,
  })
}


onChangeSupplied = (event)=>{

  this.setState({
    date_supplied: event.target.value,
  })
}

onChangeCreated = (event)=>{
  this.setState({
    date_created: event.target.value,
  })
  console.log(this.state.date_created);
}


editToServer = () =>{
  const url = "http://localhost:3004/";
  const prefix = "posts/";
  const id = this.state.id;
  let numberByFetch = this.state.number;

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

  if (this.state.number.length <= 3) {
    alert("please, your number should have at least 3 symbols")
    return
  }

  fetch(url + prefix +id , {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: Math.random()*100000000000000000,
      number: +this.state.number,
      date_supplied: correctValidDataSupplied.join("-"),
      date_created: correctValidDatacreated.join("-"),
      comment: this.state.comment,
    })
  })

}


componentWillMount(){
  const {
    linkId,
    linkcomment,
    linknumber,
    linkdate_supplied,
    linkdate_created,
  } = this.props.location.state;

  let correctValidDatacreated = []
  let correctValidDatasupplied = []

  linkdate_supplied.split("").forEach((value, index, arr) =>{
    if (value === "-" && index == 4) {

      correctValidDatacreated = linkdate_created.split("-")
      correctValidDatasupplied = linkdate_supplied.split("-")
    }else if (value !== "-" && index == 4) {

      
      let incorrectValidDatacreated = linkdate_created.split("-");
      let dayscreated = incorrectValidDatacreated[0];
      let mounhtcreated = incorrectValidDatacreated[1];
      let yearscreated = incorrectValidDatacreated[2];
      correctValidDatacreated = [yearscreated ,mounhtcreated, dayscreated];

      let incorrectValidDatasupplied = linkdate_supplied.split("-");
      let dayssupplied = incorrectValidDatasupplied[0];
      let mounhtsupplied = incorrectValidDatasupplied[1];
      let yearssupplied = incorrectValidDatasupplied[2];
      correctValidDatasupplied = [yearssupplied ,mounhtsupplied, dayssupplied];
    }
  })

  this.setState({
    id: linkId,
    number: linknumber,
    comment: linkcomment,
    date_supplied: correctValidDatasupplied.join("-"),
    date_created: correctValidDatacreated.join("-"),

  })

}

  render() {

    return (
      <React.Fragment>
      <div className="main add-main">
      <div className="header">
        <div className="header-left">
          <h1>Edit Invoices</h1>

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
                    <input type="number" className="numbe-input" placeholder="" onChange={this.onChangeNumber} value={this.state.number}/>

                  <img src="https://png.icons8.com/cotton/64/000000/settings.png"/>
                  </div>
                </div>

                <div className="forms">
                  <label htmlFor="Invoise">Invoise Date: </label>
                  <div className="inputs">
                    <input type="date" id="Invoise" data-date-format="DD MM YYYY" onFocus={this.onFocusInvoise}  className={this.state.classInv}
                     placeholder="select date"  onChange={this.onChangeCreated} value={this.state.date_created}/>

                  </div>
                </div>

                <div className="forms">
                  <label htmlFor="Supply">Supply Date: </label>
                  <div className="inputs">
                    <input type="date"  id="Supply" onFocus={this.onFocusSupplied}
                    className={this.state.classSupl} placeholder="select date"
                    onChange={this.onChangeSupplied}
                    value={this.state.date_supplied} pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"/>

                  </div>
                </div>



              </div>
              <div className="form-bottom">
                <div className="forms">
                  <label htmlFor="Comment">Comment: </label>

                  <textarea maxLength="160" name="name" type="textarea" id="Comment" rows="10" cols="20"
                  onChange={this.onChangeComments}
                  value={this.state.comment}></textarea>
                </div>
              </div>

            </form>

        </div>

        <div className="actions actions-button">
          <Link to="/main" href="#" onClick={this.editToServer}>
            <button type="button" name="button">Save</button>
          </Link>
        </div>
      </div>
      </div>

      </React.Fragment>
    );
  }
}
