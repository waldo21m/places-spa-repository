import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import {indigo400} from "material-ui/styles/colors";
import {TransitionGroup} from "react-transition-group";

import Title from "../components/Title";
import Container from "../components/Container";
import Benefits from "../components/Benefits";
import PlaceCard from "../components/places/PlaceCard";
import data from "../requests/places";
import {Link} from "react-router-dom";
import FlatButton from 'material-ui/FlatButton';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: data.places
    };

    this.hidePlace = this.hidePlace.bind(this);
  }

  places() {
    return this.state.places.map((place, index) => {
      return (
        <PlaceCard onRemove={this.hidePlace} place={place} key={index}/>
      );
    });
  }

  hidePlace(place) {
    this.setState({
      places: this.state.places.filter(el => el !== place)
    });
  }

  render() {
    return (
      <section>
        <div className="Header-background">
          <Container>
            <div style={{"marginBottom": "2em"}}>
              <div className="Header-title">
                <Title/>
                <Link to="/places-spa/signup">
                  <RaisedButton label="Crear cuenta gratuita" secondary={true}/>
                </Link>
                <FlatButton
                  href="https://github.com/waldo21m/places-spa-repository"
                  target="_blank"
                  label="GitHub Link"
                  secondary={true}
                />
              </div>
              <img className="Header-illustration"
                   src={process.env.PUBLIC_URL + "/images/top-background.svg"} alt="Map location"/>
            </div>
            <Benefits/>
          </Container>
        </div>

        <div style={{"backgroundColor": indigo400, "padding": "50px", "color": "white"}}>
          <h3 style={{"fontSize": "24px"}}>Sitios Populares</h3>
          <TransitionGroup className="row">
            {this.places()}
          </TransitionGroup>
        </div>
      </section>
    );
  }
}
