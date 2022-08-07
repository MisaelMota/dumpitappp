import { Firstlayer } from './Components/sections/FirstLayer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/sections/header';
import InicioSesion from "./Components/pages/InicioSesion";
import Registrarse from "./Components/pages/Registrarse";
import SesionHeader from './Components/sections/SesionHeader';

function App() {
  return (
    <div >
      <BrowserRouter>

        {/* <Header /> */}
        <SesionHeader />
        <Routes>
          <Route path='/' element={<Firstlayer />} />
          <Route path='/inicioSesion' element={<InicioSesion />} />
          <Route path='/Registrate' element={<Registrarse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
