import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css"
import { MdOutlineSettings } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useRef,useEffect } from "react";




function SideBarDetail() {
   

    return (
        <div id="sideBar">
            <div className="sideDetail-name-container">
                <p className="name-perfil">Armando Mesa</p>
            </div>

            <div className="sideDetail-ul-container">
                <ul>
                    <li className="li-perfil">
                        <NavLink to="/TuPerfil" exact>Tu perfil</NavLink>
                    </li>

                    <li className="li-configuration">
                        <div className="icon-configuration">
                            <MdOutlineSettings />
                        </div>

                        <div className="link-configuration-contariner">
                            <NavLink to="/Configuracion" exact>Configuración</NavLink>
                        </div>

                    </li>

                    <li className="li-cerrar-sesion-detail">
                        <div className="icon-cerrar-sesion-container">
                            <i className="icon-cerrar-sesion"><AiOutlinePoweroff/></i>
                        </div>

                        <div className="btn-cerrar-sesion-container">
                            <button className="btn-cerrar-sesion">
                                <p className="cerrar-sesion-text">Cerrar sesión</p>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBarDetail;