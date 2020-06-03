import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {TransitionGroup} from "react-transition-group";
import {CSSTransition} from "react-transition-group";
import {withRouter} from 'react-router-dom';

import MyAppBar from "./components/navigation/MyAppBar";

import "./App.css";
import data from "./requests/places";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: data.places
    };

    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.history.push("/");
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <MyAppBar goHome={this.goHome}/>
          <TransitionGroup>
            <CSSTransition
              unmountOnExit={true}
              timeout={{enter: 500, exit: 500}}
              classNames="left-out"
              key={this.props.location.pathname.split('/')[1]}
              in={this.props.in}
            >
              {this.props.children}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
