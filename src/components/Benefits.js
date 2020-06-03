import React from "react";
import {Card, CardMedia, CardText} from "material-ui/Card";
import {redA400, lightBlue400, amberA400} from "material-ui/styles/colors";

export default class Benefits extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-4 Benefit">
          <Card className="Header-Benefit">
            <CardMedia style={{"backgroundColor": redA400}}>
              <div className="Header-Benefit-image">
                <img src={process.env.PUBLIC_URL + "/images/heart.svg"} alt="Heart"/>
              </div>
            </CardMedia>
            <CardText>
              <h3>Calificaciones con emociones</h3>
              <p>Califica tus lugares con experiencias, no con números</p>
            </CardText>
          </Card>
        </div>
        <div className="col-xs-12 col-sm-4 Benefit">
          <Card className="Header-Benefit">
            <CardMedia style={{"backgroundColor": lightBlue400}}>
              <div className="Header-Benefit-image">
                <img src={process.env.PUBLIC_URL + "/images/wifi.png"} alt="No Internet"/>
              </div>
            </CardMedia>
            <CardText>
              <h3>¿Sin internet? Sin problemas</h3>
              <p>Places funciona sin internet o en conexiones lentas</p>
            </CardText>
          </Card>
        </div>
        <div className="col-xs-12 col-sm-4 Benefit">
          <Card className="Header-Benefit">
            <CardMedia style={{"backgroundColor": amberA400}}>
              <div className="Header-Benefit-image">
                <img src={process.env.PUBLIC_URL + "/images/star.png"} alt="Star"/>
              </div>
            </CardMedia>
            <CardText>
              <h3>Tus lugares favoritos</h3>
              <p>Define tu lista de sitios favoritos</p>
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}
