import React from "react";
import {Card, CardText} from "material-ui/Card";
import {redA400, lightBlue400, amberA400} from "material-ui/styles/colors";

export default class Benefits extends React.Component {
  render() {
    return (
      <div>
        <Card className="Header-Benefit">
          <CardText>
            <div className="row">
              <div className="Header-Benefit-image" style={{"backgroundColor": redA400}}>
                <img src={process.env.PUBLIC_URL + "/images/heart.svg"} alt="Heart"/>
              </div>
              <div className="Header-Benefit-content">
                <h3>Calificaciones con emociones</h3>
                <p>Califica tus lugares con experiencias, no con números</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className="Header-Benefit">
          <CardText>
            <div className="row">
              <div className="Header-Benefit-image"
                   style={{"backgroundColor": lightBlue400}}>
                <img src={process.env.PUBLIC_URL + "/images/wifi.png"} alt="No Internet"/>
              </div>
              <div className="Header-Benefit-content">
                <h3>¿Sin internet? Sin problemas</h3>
                <p>Places funciona sin internet o en conexiones lentas</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className="Header-Benefit">
          <CardText>
            <div className="row">
              <div className="Header-Benefit-image"
                   style={{"backgroundColor": amberA400}}>
                <img src={process.env.PUBLIC_URL + "/images/star.png"} alt="Star"/>
              </div>
              <div className="Header-Benefit-content">
                <h3>Tus lugares favoritos</h3>
                <p>Define tu lista de sitios favoritos</p>
              </div>
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}