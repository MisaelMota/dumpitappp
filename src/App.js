import InicioSesion from "./Components/pages/InicioSesion";
import Registrarse from "./Components/pages/Registrarse";
import { useContext } from "react";
import { Firstlayer } from "./Components/sections/FirstLayer";
import Header from "./Components/sections/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Components/pages/profile";
import PublicPages from "./Components/pages/publicPages";
import AuthProv from "./context/AuthProvider";
import SesionHeader from "./Components/sections/SesionHeader";
import SideBar from "./Components/sections/sideBar";
import PerfilUsuario from "./Components/pages/PerfilUsuario";
import Configuracion from "./Components/pages/Configuracion";
import StatisticsPerfil from "./Components/pages/statisticsPerfil";

function App() {

  const seth = useContext(AuthProv)
  console.log(seth)
  return (
    <div >
      <BrowserRouter>

        {/* <SesionHeader />

        <SideBar />

        <Routes>
          <Route path='/TuPerfil' element={<PerfilUsuario />} />
          <Route path='/Configuracion' element={<Configuracion />} />
          <Route path='/statistics' element={<StatisticsPerfil />} />

        </Routes> */}

        {
          seth.auth.email == undefined && seth.auth.password == undefined && seth.auth.accessToken == undefined ? (
            <>

              <Header />

              <Routes>
                <Route path='/' element={<Firstlayer />} />
                <Route path='/inicioSesion' element={<InicioSesion />} />
                <Route path='/Registrate' element={<Registrarse />} />
              </Routes>
            </>
          ) : (

            <>
              <SesionHeader />

              <SideBar />

              <Routes>
                <Route path='/TuPerfil' element={<PerfilUsuario />} />
                <Route path='/Configuracion' element={<Configuracion />} />
                <Route path='/statistics' element={<StatisticsPerfil />} />
                <Route path='/perfilProfesor' element={<Profile/>} />
              </Routes>

            </> 
          )
        }





      </BrowserRouter>
    </div>
  );
}

export default App;

