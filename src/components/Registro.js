import React from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'
import email_icon from './Asserts/sobre.png'
import password_icon from './Asserts/llave.png'

const Registro =() => {
   const navigate = useNavigate();

    const handleRedireccionRE = () => {
        // Para redirigir a otra página, usa la función navigate.
        navigate('/');
    };
    

    return (
        
        <div className='conta'>
        <div className="hear">
        <div className="tex">Registrarse</div>
                <div className="under"></div>
                </div>
      <form onSubmit={handleRedireccionRE}>
      <div className="espacio">
                       <div className="recuadro">
                        <img src={email_icon} alt=''/>
                        <input type="nombre" placeholder='Nombre'/>
                        </div>
                   
                        <div className="recuadro">
                        <img src={password_icon} alt=''/>
                        <input type="apellido" placeholder='Apellido'/>
                        </div>
                    
                        <div className="recuadro">
                        <img src={email_icon} alt=''/>
                        <input type="electronico" placeholder='Correo Electronico'/>
                        </div>

                        <div className="recuadro">
                        <img src={password_icon} alt=''/>
                        <input type="contraseña" placeholder='Contraseña'/>
                        </div>
                        </div>
                        
                        
    
      
        <div className="forgot">
            <div className="summ">
    
                <button className="sub"onClick={handleRedireccionRE} >Guardar</button>
            </div>
            </div>
         
      </form>
    </div>
  );
};
 

export default Registro;