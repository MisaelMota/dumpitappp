import SesionHeader from '../sections/SesionHeader';
import SideBar from '../sections/sideBar';
import PerfilUsuario from '../pages/PerfilUsuario';
import Configuracion from './Configuracion';
import StatisticsPerfil from "./statisticsPerfil";
import { Route, Routes } from "react-router-dom";


const Profile = () => {
    return (
        <>
            <SesionHeader />

            <SideBar />

            <Routes>
                <Route path='/TuPerfil' element={<PerfilUsuario />} />
                <Route path='/Configuracion' element={<Configuracion />} />
                <Route path='/statistics' element={<StatisticsPerfil />} />

            </Routes>

        </>
    )
}

export default Profile
