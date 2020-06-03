import React from "react";

import Title from "../components/Title";
import Container from "../components/Container";
import LoginComponent, {LoginImage} from '../components/Login';
import SignUpComponent, {SignUpImage} from '../components/Signup';

import TextField from 'material-ui/TextField';

import {Route} from "react-router-dom";

import {login, signUp} from "../requests/auth";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.requestAuth = this.requestAuth.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  requestAuth() {
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue()
    };

    login(credentials).then(console.log).catch(console.log);
  }

  createAccount() {
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue()
    };

    signUp(credentials).then(console.log).catch(console.log);
  }

  render() {
    return (
      <div style={{"overflowX": "hidden"}}>
        <div className="row middle-xs">
          <div className="col-xs-12 col-sm-6 Col-margin">
            <Container>
              <div style={{"textAlign": "left"}}>
                <Title/>
                <TextField
                  floatingLabelText="Correo electrónico"
                  type="email"
                  className="textfield"
                  ref="emailField"
                />
                <TextField
                  floatingLabelText="Contraseña"
                  type="password"
                  className="textfield"
                  ref="passwordField"
                />
                <div className="Login-actions">
                  <Route path="/login" exact
                         render={(props) => <LoginComponent {...props} requestAuth={this.requestAuth}/>}/>
                  <Route path="/signup" exact
                         render={(props) => <SignUpComponent {...props} createAccount={this.createAccount}/>}/>
                </div>
              </div>
            </Container>
          </div>
          <div className="col-xs-12 col-sm-6">
            <Route path="/login" exact render={LoginImage}/>
            <Route path="/signup" exact render={SignUpImage}/>
          </div>
        </div>
      </div>
    );
  }
}