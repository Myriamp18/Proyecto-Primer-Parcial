import React,{useState} from "react";
import "./Menu.css"
import Inicio from "./Inicio"



const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    return(
        <div>
        <div className="navbar">
            <div className="nav_logo">MENU</div>
            <div className={`nav_items ${isOpen ? "open" : ""}`}>
                <a href="#">INICIO</a>
                <a href="#">PERFIL</a>
                <a href="#">CONFIGURACIONES</a>
                <a href="#">AYUDA</a>
                
            </div>
            <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            </div>

            <Inicio/>

            </div>

            
              

        
    )

    
}

export default Menu;