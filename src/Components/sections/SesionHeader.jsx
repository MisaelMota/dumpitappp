import '../styles/Header.css'
import { IoSearchCircleOutline } from "react-icons/io5";


function SesionHeader() {
    return (

        <div className="Principal-container-H-Sesion">
            <header className="header-container-Sesion">
                <div>
                    <nav className="nav-container-Sesion">
                        <div className="input-container-search-sesion">

                            <input className="input-search-sesion" type="text" />
                        </div>

                        <div className="icon-search-sesion-container">
                            <i className="icon-search-sesion">
                                <IoSearchCircleOutline />
                            </i>
                        </div>

                        <div className="container-NameApp-sesion">
                            
                            <h2 className="nameApp-sesion">Dump It</h2>
                        </div>

                    </nav>
                </div>
            </header>
        </div>
    )

}

export default SesionHeader