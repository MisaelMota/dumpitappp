import NameApp from "../sections/NameApp";
import "../styles/Registro.css";
import { BsGoogle } from "react-icons/bs";

function registro() {
    return (
        <div>
            <div className='title-container-Registro'>
                <div className='name-container-Registro'>
                    <NameApp />
                </div>
            </div>


            <div className="Registro-Formulario">
                <div className="Registro-Titulo">
                    <p>Registro</p>
                </div>

                <div className="Registro-Campos">
                    <div className="registro-Nombre-apellido">


                        <div className="Registro-nombre">
                            <div className="Registro-nombre-texto-Container">
                                <p className="Registro-title-nombre">Nombre(s)</p>
                            </div>

                            <div className="Registro-nombre-input-Container">
                                <input className='Registro-input-Text-nombre' type="text" />
                            </div>
                        </div>

                        <div className="Registro-apellido">

                            <div className="Registro-apellido-texto-Container">
                                <p className="Registro-title-apellido">Apellido(s)</p>
                            </div>

                            <div className="Registro-apellido-input-Container">
                                <input className='Registro-input-Text-apellido' type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="Registro-correo">
                        <div className="Registro-correo-texto-Container">
                            <p className="Registro-title-correo">Correo electronico</p>
                        </div>

                        <div className="Registro-correo-input-Container">
                            <input className='Registro-input-Text-correo' type="text" />
                            <div className="texto-correo-container">
                                <p>Se enviará un enlace de confirmación a tu correo. Verifica que tus <br />
                                    credenciales son correctas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="Registro-contrasena">
                        <div className="Registro-contrasena-texto-Container">
                            <p className="Registro-title-contrasena">Contraseña</p>
                        </div>

                        <div className="Registro-contrasena-input-Container">
                            <input className='Registro-input-Text-contrasena' type="password" />
                        </div>
                    </div>

                    <div className="Registro-carrera">
                        <div className="Registro-carrera-texto-Container">
                            <p className="Registro-title-carrera">Carrera</p>
                        </div>

                        <div className="Registro-carrera-input-Container">
                            <input className='Registro-input-Text-carrera' type="text" />
                        </div>
                    </div>



                </div>

                <div className="Registro-Footer">

                    <div>
                        <button className="btn-Registro">
                            Iniciar
                        </button>

                    </div>

                    <div>

                        <a href="https://www.google.com/" className="link-Registro" >

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


export default registro