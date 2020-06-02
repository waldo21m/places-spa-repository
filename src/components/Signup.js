import React from "react";
import {Link} from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";

const SignUp = ({createAccount}) => {
  return (
    <div>
      <Link to="/login" style={{"marginRight": "1em"}}>Ya tengo cuenta</Link>
      <RaisedButton onClick={createAccount} label="Crear cuenta" secondary={true}/>
    </div>
  );
};

const SignUpImage = () => {
  return (
    <div className="Login-background"
         style={{"backgroundImage": `url(${process.env.PUBLIC_URL}/images/signup-background.jpeg)`}}/>
  );
};

export default SignUp;

export {SignUpImage};
