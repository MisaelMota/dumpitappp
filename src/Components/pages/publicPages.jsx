import { Route, Routes } from "react-router-dom";
import Header from '../sections/header';
import InicioSesion from "./InicioSesion";
import Registrarse from "./Registrarse";
import { Firstlayer } from '../sections/FirstLayer';

const PublicPages = () => {
    return (
        <>
            <Header />
            <Firstlayer />
            <Routes>
                 {/* <Route path='/fLayer' element={<Firstlayer />} />  */}
                <Route path='/inicioSesion' element={<InicioSesion />} />
                <Route path='/Registrate' element={<Registrarse />} />
            </Routes>

        </>
    )
}

export default PublicPages