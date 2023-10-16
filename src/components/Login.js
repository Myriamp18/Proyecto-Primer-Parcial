import React from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import email_icon from './Asserts/sobre.png'
import password_icon from './Asserts/llave.png'

const Login =() => {
   const navigate = useNavigate();

    const handleRedireccion = () => {
        // Para redirigir a otra página, usa la función navigate.
        navigate('/Menu');
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">LOGIN</div>
                <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={email_icon} alt=''/>
                        <input type="email" placeholder='Correo Electronico'/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt=''/>
                        <input type="password" placeholder='Contraseña'/>
                    </div>
                </div>
            
            <div className="forgot-password"></div>
            <div className="submit-container">
                <div className="submit" onClick={handleRedireccion}>Iniciar Sesion</div>
            </div>
            
            </div>
    );
};

export default Login;