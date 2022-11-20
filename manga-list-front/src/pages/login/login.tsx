import React from 'react';
import logo from './../../assets/images/Logo.png';
import "./login.css";
import { AiOutlineHome } from "react-icons/ai";

const Login = () => {
  return (

    <div id='divContainerLogin'>

        <div className='returnHome'>
            <AiOutlineHome id='homeButton'></AiOutlineHome>
        </div>
       
       <div id='divLogo'>
            <img src={logo} className="logo" alt="Logo" />
       </div>

        <form id='formUserData'>
            <div id="divUsernameLogin">
                <label className='labelLogin' id="labelUsernameLogin" htmlFor="usernameLogin">Username</label>
                <input className='loginFormInput' id="usernameLogin" type="text" />
            </div>

            <div id="divPasswordLogin">
                <label className='labelLogin' id='labelPasswordLogin' htmlFor="usernameLogin">Password</label>
                <input className='loginFormInput' id='passwordLogin' type="text" />
            </div>

            <div id='divButtonLogin'>
                <button id='buttonLogin' className='buttonDefault'>ENTRAR</button>
            </div>
        </form>

        <div id='divRegister'>
            <span id='spanRegister'>Não tem uma conta?</span>
            <button id='registerButton' className='buttonDefault'>CADASTRE-SE</button>

        </div>

        



    </div>


  )
}

export default Login