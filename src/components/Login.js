import React from "react";
import {Link} from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";

const Login = ({requestAuth}) => {
  return (
    <div>
      <Link to="/places-spa/signup" style={{"marginRight": "1em"}}>Crear nueva cuenta</Link>
      <RaisedButton onClick={requestAuth} label="Ingresar" secondary={true}/>
    </div>
  );
};

const LoginImage = () => {
  return (
    <div className="Login-background"
         style={{"backgroundImage": `url(${process.env.PUBLIC_URL}/images/login-background.jpg)`}}/>
  );
};

export default Login;

export {LoginImage};
