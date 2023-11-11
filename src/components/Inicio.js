import React,{} from "react";
import "./Inicio.css"
import IA_1 from './Asserts/IA1.png'
//import {useNavigate} from 'react-router-dom'
import {Configuration, OpenAIApi} from 'openai';


const configuration = new Configuration({
    apiKey: import.meta.env.VITE_MY_API_KEY,
});

const openai = new OpenAIApi(configuration);


const Inicio = () => {
    
async function fetchData(){
    try{
      const response = await openai.createImagen({
        prompt:"cat with wings",
        n: 1,
        size:"512x512",

      })
      console.log(response.data.data[0].url);

    } catch(e){
        console.log(e);
    }

}




    //const navigate = useNavigate();
   // const handleRedireccion = () => {
        // Para redirigir a otra página, usa la función navigate.
     //   navigate('/');
   // };
    
    return(
        <div>
        
        <div className="submm">PHOTOIA</div>
        <div className="texto">Esta aplicacion es un tipo de generador de fotografias en IA, El generador de imagenes te permite tener siempre a mano la imagen perfecta, aunque no exista.
        crea imagenes  que visualicen un producto o una idea, esboza un concepto creativo o supera los lomites de lo sposible. solo tienes que escribir un texto. </div>
        <div className="img-1">
        <img src={IA_1} alt=''/>
        </div>
        
        <div className="inputs">
        <input type="CONTENEDOR" placeholder='Descripcion de fotografía IA  a generar'/>
        </div>
        <div className="submit" onClick={fetchData}>GENERAR</div>
    </div>
    
        

        
    )

    
}

export default Inicio;