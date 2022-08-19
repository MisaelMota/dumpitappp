import NameApp from "../sections/NameApp";
import '../styles/inicioSesion.css'
import { BsGoogle } from "react-icons/bs";
import { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../Hooks/axios";
import Profile from "./profile";

const LOGIN_URL = '/sign_in'



const InicioSesion = () => {
    const { setAuth } = useContext(AuthContext)
    

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });

            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.token;
            setAuth({ email, password, accessToken })
            localStorage.setItem('token', accessToken);
            setEmail('')
            setPassword('')
            setSuccess(true)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Email or Password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login failed')
            }
            errRef.current.focus();
        }
    }


    return (
        <>
            

                <div>
                    <div className='title-container-Sesion'>
                        <div className='name-container-Sesion'>
                            <NameApp />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inicio-Sesion-Formulario">
                            <div className="inicio-Sesion-Titulo">
                                <p>Inicio de Sesión</p>
                            </div>

                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                                aria-live="assertive">{errMsg}</p>


                            <div className="inicio-Sesion-Campos">

                                <div className="Inicio-Sesion-Correo">
                                    <div className="correo-texto-Container">
                                        <p htmlFor="emailLogin" className="title-correo">Correo electronico</p>
                                    </div>

                                    <div className="correo-input-Container">
                                        <input
                                            className='input-Text-Sesion'
                                            type="text"
                                            id="emailLogin"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required

                                        />
                                    </div>



                                </div>

                                <div className="inicio-Sesion-Contrasena">

                                    <div className="contrasena-texto-Container">
                                        <p htmlFor="passwordLogin" className="title-contrasena">Contraseña</p>
                                    </div>

                                    <div className="contrasena-input-Container">
                                        <input className='input-Text-contrasena'
                                            type="password"
                                            id="passwordLogin"
                                            autoComplete="off"
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
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
                    </form>








                </div>
            

        </>
    )
}


export default InicioSesion