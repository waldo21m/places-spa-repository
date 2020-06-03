import React from "react";
import {Card, CardText, CardMedia, CardTitle, CardActions} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import {CSSTransition} from "react-transition-group";

export default class PlaceCard extends React.Component {
  render() {
    return (
      <CSSTransition
        unmountOnExit={true}
        timeout={{enter: 500, exit: 500}}
        classNames="fade-scale"
        in={this.props.in}
      >
        <div className="col-xs-12 col-sm-4 Col-margin">
          <Card>
            <CardMedia>
              <img src={process.env.PUBLIC_URL + this.props.place.imageUrl} alt={this.props.place.title}/>
            </CardMedia>
            <CardTitle title={this.props.place.title}/>
            <CardText>{this.props.place.description}</CardText>
            <CardActions style={{"textAlign": "right"}}>
              <FlatButton secondary={true} onClick={() => this.props.onRemove(this.props.place)} label="Ocultar"/>
            </CardActions>
          </Card>
        </div>
      </CSSTransition>
    );
  }
}
