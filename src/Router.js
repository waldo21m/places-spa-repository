import React from 'react';

import {
  BrowserRouter as ReactRouter,
  Route,
  Switch
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Place from "./components/places/Place";
import App from './App';

const userSignIn = false;

export default class Router extends React.Component {
  signedInRoutes() {
    if (userSignIn) {
      return (
        <Route path="/new" render={() => <h1>Bienvenido</h1>}/>
      );
    }
  }

  home() {
    if (userSignIn) return Dashboard;

    return Home;
  }

  render() {
    return (
      <ReactRouter>
        <App>
          <Switch>
            <Route exact path="/" component={this.home()}/>
            <Route path="/lugares/:slug" component={Place}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Login}/>
            {this.signedInRoutes()}
          </Switch>
        </App>
      </ReactRouter>
    );
  }
}