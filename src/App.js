import React, { Component } from 'react';
import {MainPage} from "./components/main-page"
import {AddPage} from "./components/add-page"
import {EditPage} from "./components/edit-page"
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

const routers = [
  {
    path: "/add",
    component: AddPage,
    initialDate: ""
  },
  {
    path: "/main",
    component: MainPage,
    initialDate: ""
  },
  {
    path: "/edit",
    component: EditPage,
    initialDate: "1234"
  },

]


class App extends Component {

  render() {

    return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component= {MainPage} exact />
        <Route path="/edit" component= {EditPage} exact />
        <Route path="/add" component= {AddPage} exact />
        <Route component = {MainPage} exact/>
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
