import { Link, NavLink } from "react-router-dom";
import '../styles/Header.css'


function Header() {
    return (
        
        <div className="Principal-container">
            <header className="header-container">
                <div>
                    <nav className="nav-container">
                        <ul className="ul-container">
                            
                            <li><NavLink to="/inicioSesion" exact>Inicio de sesion</NavLink></li>
                            <li><NavLink to="/Registrate" exact>Registrate</NavLink></li>

                        </ul>  
                    </nav>
                </div>
            </header>
        </div>
    )

}

export default Header