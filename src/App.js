import './App.css';
import Login from './components/Login'
import Menu from './components/Menu'
import { BrowserRouter, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Ruta de inicio, muestra el componente Login */}
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
