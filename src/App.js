import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Dashboard from './Dashboard';
import Dash from './Dash';
import Login1 from './Login1';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Route,Switch} from "react-router";
import {Link} from "react-router-dom";
import Fo from './fo';
function App(){
  return(
    <div className="app-routes">
    <Switch>
    <Route path="/"  exact component={Fo} />

      <Route path="/admin"  component={Dashboard} />
    </Switch>
  </div>
  )
}

export default App;