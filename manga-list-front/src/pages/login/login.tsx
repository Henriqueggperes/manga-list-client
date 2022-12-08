import React from "react";
import logo from "./../../assets/images/Logo.png";
import "./login.css";
import { AiOutlineHome } from "react-icons/ai";

const Login = () => {
  return (
    <div id="divContainerLogin">
      <div className="returnHome">
        <AiOutlineHome id="homeButton"></AiOutlineHome>
      </div>
      <div className="loginLogoContainer">
        <img src={logo}></img>
      </div>
      <div className="loginFormContainer">

        <form className="loginForm">
          <div className="loginFormInputsContainer">
            <input required name="e-mail" type="email" />
            <label htmlFor="e-mail">E-Mail</label>
          </div>
          <div className="loginFormInputsContainer">
            <input required name="password" type="password" />
            <label htmlFor="password">Password</label>
          </div>
          <div id="loginFormSendButtonContainer">
             <button>ENTRAR</button>
          </div>
        </form>
      </div>

        <div className="registerOptionContainer">
           <span>Não tem uma conta?</span>
           <div className="registerLink">
             CADASTRE-SE
           </div>
        </div>
    </div>
  );
};

export default Login;
