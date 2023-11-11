import './App.css';
import Login from './components/Login'
import Menu from './components/Menu'
import Registro from './components/Registro'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';


function App() {
  return (
    <div>
     <Router>
      
        <Routes>
          <Route path="/" element={<Login />} /> {/* Ruta de inicio, muestra el componente Login */}
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Registro" element={<Registro />} />
          
        </Routes>
     </Router>
      
    </div>
  );
};

export default App;
