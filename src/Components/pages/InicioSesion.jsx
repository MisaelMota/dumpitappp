import NameApp from "../sections/NameApp";
import '../styles/inicioSesion.css'
import { BsGoogle } from "react-icons/bs";

function inicioSesion() {
    return (
        <div>
            <div className='title-container-Sesion'>
                <div className='name-container-Sesion'>
                    <NameApp />
                </div>
            </div>

            <div className="inicio-Sesion-Formulario">
                <div className="inicio-Sesion-Titulo">
                    <p>Inicio de Sesión</p>
                </div>

                <div className="inicio-Sesion-Campos">

                    <div className="Inicio-Sesion-Correo">
                        <div className="correo-texto-Container">
                            <p className="title-correo">Correo electronico</p>
                        </div>

                        <div className="correo-input-Container">
                            <input className='input-Text-Sesion' type="text" />
                        </div>



                    </div>

                    <div className="inicio-Sesion-Contrasena">

                        <div className="contrasena-texto-Container">
                            <p className="title-contrasena">Contraseña</p>
                        </div>

                        <div className="contrasena-input-Container">
                            <input className='input-Text-contrasena' type="password" />
                        </div>
                    </div>
                </div>

                <div className="inicio-Sesion-Footer">

                    <div>
                        <button className="btn-Inicio-Sesion">
                            Iniciar
                        </button>

                    </div>

                    <div>

                        <a href="https://www.google.com/" className="link-Inicion-Sesion" >

                            <i className="icon-google-link" >
                                <BsGoogle />
                            </i>

                        </a>

                    </div>



                </div>

            </div>








        </div>
    )
}


export default inicioSesion