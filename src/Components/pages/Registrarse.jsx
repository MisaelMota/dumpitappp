import NameApp from "../sections/NameApp";
import "../styles/Registro.css";
import { BsGoogle } from "react-icons/bs";
import { useRef, useState, useEffect } from "react"
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../Hooks/axios";
import { Link, NavLink } from "react-router-dom"; 

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,40}$/i;
const EML_REGEX = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{3,6})$/g;
const GEN_REGEX = /^[a-z ,.'-]+$/i
const EMl_two = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
const iconId = 1;


const REGISTER_URL = '/sign_up'


const Registro = () => {

    const userRef = useRef()
    const errRef = useRef()

    const [name, setName] = useState('')
    const [validName, setValidName] = useState(false)
    const [focusName, setFocusName] = useState(false)

    const [lastName, setLastName] = useState('')
    const [validLastName, setValidLastName] = useState(false)
    const [focusLastName, setFocusLastName] = useState(false)

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [focusEmail, setFocusEmail] = useState(false)

    const [password, setpassword] = useState('')
    const [validPassword, setvalidPassword] = useState(false)
    const [focusPassword, setfocusPassword] = useState(false)

    const [school, setSchool] = useState('')
    const [validSchool, setValidSchool] = useState(false)
    const [focusSchool, setFocusSchool] = useState(false)

    const [errMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(GEN_REGEX.test(name))
    }, [name])

    useEffect(() => {
        setValidLastName(GEN_REGEX.test(lastName))
    }, [lastName])


    useEffect(() => {
        setvalidPassword(PWD_REGEX.test(password))
    }, [password])

    useEffect(() => {
        setValidEmail(EMl_two.test(email))
    }, [email])

    useEffect(() => {
        setValidSchool(GEN_REGEX.test(school))
    }, [school])

    useEffect(() => {
        setErrorMsg('')
    }, [name, lastName, email, password, school])


    const handleSubmit = async (e) => {
        e.preventDefault()
        const v1 = GEN_REGEX.test(name);
        const v2 = PWD_REGEX.test(password)
        const v3 = GEN_REGEX.test(lastName)
        const v4 = EMl_two.test(email)
        const v5 = GEN_REGEX.test(school)
        console.log(v1, v2, v3, v4, v5)
        if (!v1 || !v2 || !v3 || !v5) {

            setErrorMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL, JSON.stringify({ name, lastName, email, password, school, iconId }),
                {

                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                })

            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            
            setName('')
            setLastName('')
            setpassword('')
            setEmail('')
            setSchool('')
        } catch (err) {

            if (!err?.response) {
                setErrorMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrorMsg('Username Taken');
            } else {
                setErrorMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }








    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <NavLink to="/inicioSesion" exact>Inicio de sesion</NavLink>
                    </p>
                </section>
            ) : (
                <div>
                    <div className='title-container-Registro'>
                        <div className='name-container-Registro'>
                            <NameApp />
                        </div>
                    </div>



                    <form onSubmit={handleSubmit}>


                        <div className="Registro-Formulario">
                            <div className="Registro-Titulo">
                                <p>Registro</p>

                            </div>

                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                                aria-live="assertive">{errMsg}</p>
                            <div className="Registro-Campos">
                                <div className="registro-Nombre-apellido">


                                    <div className="Registro-nombre">
                                        <div className="Registro-nombre-texto-Container">
                                            <p htmlFor="name" className="Registro-title-nombre">
                                                Nombre(s):
                                                <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />

                                            </p>
                                        </div>

                                        <div className="Registro-nombre-input-Container">
                                            <input className='Registro-input-Text-nombre'
                                                ref={userRef}
                                                type="text"
                                                id="name"
                                                autoComplete="off"
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                                required
                                                aria-invalid={validName ? "false" : "true"}
                                                aria-describedby="uidnote"
                                                onFocus={() => setFocusName(true)}
                                                onBlur={() => setFocusName(false)}
                                            />
                                        </div>
                                    </div>


                                    <div className="Registro-apellido">

                                        <div className="Registro-apellido-texto-Container">
                                            <p htmlFor="lastName" className="Registro-title-apellido">
                                                Apellido(s):
                                                <FontAwesomeIcon icon={faCheck} className={validLastName ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validLastName || !lastName ? "hide" : "invalid"} />

                                            </p>
                                        </div>

                                        <div className="Registro-apellido-input-Container">
                                            <input className='Registro-input-Text-apellido'
                                                type="text"
                                                id="lastName"
                                                autoComplete="off"
                                                onChange={(e) => setLastName(e.target.value)}
                                                value={lastName}
                                                required
                                                aria-invalid={validLastName ? "false" : "true"}
                                                aria-describedby="lastNameNote"
                                                onFocus={() => setFocusLastName(true)}
                                                onBlur={() => setFocusLastName(false)}

                                            />
                                        </div>
                                    </div>


                                </div>

                                <div>
                                    <p id="uidnote" className={focusName && name && !validName ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Este campo debe tener caracteres especiales (@!?#*/)
                                    </p>

                                    <p id="lastNameNote" className={focusLastName && lastName && !validLastName ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Este campo debe tener caracteres especiales (@!?#*/)
                                    </p>
                                </div>

                                <div className="Registro-correo">
                                    <div className="Registro-correo-texto-Container">
                                        <p htmlFor="email" className="Registro-title-correo">
                                            Correo electronico:
                                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                                        </p>
                                    </div>

                                    <div className="Registro-correo-input-Container">
                                        <input className='Registro-input-Text-correo'
                                            type="text"
                                            id="email"
                                            autoComplete="off"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            required
                                            aria-invalid={validEmail ? "false" : "true"}
                                            aria-describedby="emailNote"
                                            onFocus={() => setFocusEmail(true)}
                                            onBlur={() => setFocusEmail(false)}

                                        />

                                    </div>
                                </div>

                                <div >
                                    {/* <p>Se enviará un enlace de confirmación a tu correo. Verifica que tus <br />
                                        credenciales son correctas.</p> */}

                                    <p id="emailNote" className={focusEmail && email && !validEmail ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Este campo debe tener estrutura de correo, ejemplo: <br />
                                        example@gmail.com
                                    </p>
                                </div>


                                <div className="Registro-contrasena">
                                    <div className="Registro-contrasena-texto-Container">
                                        <p htmlFor="contrasena" className="Registro-title-contrasena">
                                            Contraseña:
                                            <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                                            <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
                                        </p>
                                    </div>

                                    <div className="Registro-contrasena-input-Container">
                                        <input className='Registro-input-Text-contrasena'
                                            type="password"
                                            id="contrasena"
                                            autoComplete="off"
                                            value={password}
                                            onChange={(e) => setpassword(e.target.value)}
                                            required
                                            aria-invalid={validPassword ? "false" : "true"}
                                            aria-describedby="passwordNote"
                                            onFocus={() => setfocusPassword(true)}
                                            onBlur={() => setfocusPassword(false)}

                                        />
                                    </div>
                                </div>

                                <div >

                                    <p id="passwordNote" className={focusPassword && password && !validPassword ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Este campo debe estar entre 8 y 40 carateres,<br />
                                        tener al menos un numero
                                    </p>
                                </div>





                                <div className="Registro-carrera">
                                    <div className="Registro-carrera-texto-Container">
                                        <p htmlFor="carrera" className="Registro-title-carrera">
                                            Carrera:

                                            <FontAwesomeIcon icon={faCheck} className={validSchool ? "valid" : "hide"} />
                                            <FontAwesomeIcon icon={faTimes} className={validSchool || !school ? "hide" : "invalid"} />
                                        </p>
                                    </div>

                                    <div className="Registro-carrera-input-Container">
                                        <input className='Registro-input-Text-carrera'
                                            type="text"
                                            id="carrera"
                                            autoComplete="off"
                                            onChange={(e) => setSchool(e.target.value)}
                                            value={school}
                                            required
                                            aria-invalid={validSchool ? "false" : "true"}
                                            aria-describedby="carreraNote"
                                            onFocus={() => setFocusSchool(true)}
                                            onBlur={() => setFocusSchool(false)}

                                        />
                                    </div>
                                </div>

                                <div>
                                    <p id="carreraNote" className={focusSchool && school && !validSchool ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Este campo debe tener caracteres especiales (@!?#*/)
                                    </p>


                                </div>



                            </div>

                            <div className="Registro-Footer">

                                <div>
                                    <button disabled={!validName || !validLastName || !validEmail || !validPassword || !validSchool ? true : false}
                                        className="btn-Registro">
                                        Registrar
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
                    </form>









                </div>
            )}


        </>


    )

}


export default Registro