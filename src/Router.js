import React from 'react';

import {
  BrowserRouter as ReactRouter,
  Route,
  Switch
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import App from './App';

export default class Router extends React.Component {
  render() {
    return (
      <ReactRouter>
        <App>
          <Switch>
            <Route exact path="/places-spa" component={Home}/>
            <Route path="/places-spa/login" component={Login}/>
            <Route path="/places-spa/signup" component={Login}/>
          </Switch>
        </App>
      </ReactRouter>
    );
  }
}
