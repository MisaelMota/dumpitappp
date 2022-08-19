import "../styles/statistics.css"
import { FaBell } from "react-icons/fa";
import { TbLetterF } from "react-icons/tb";
import { useState } from "react";
import AuthProv from "../../context/AuthProvider";
import { useContext } from "react";
import Multiselect from "multiselect-react-dropdown"
import axios from "../../Hooks/axios";

const RATE_URL = '/rate_professor'

function StatisticsPerfil() {
    const seth = useContext(AuthProv)
    const tr=true
    


    const [subject, setSubject] = useState('')
    const [modality, setModality] = useState('')
    const [userGrade, setUserGrade] = useState(0)
    const [wouldTakeAgain, setWouldTakeAgain] = useState(false)
    const [rate, setRate] = useState(0)
    const [options, setOptions] = useState(['Participación', 'Desvia la clase', 'Impuntual', 'Didactico', 'Publica Tarde'])
    const [tag, setTag] = useState([])
    const [difficulty, setDifficulty] = useState(0)
    const [errMsg, setErrorMsg] = useState('')

    console.log(wouldTakeAgain)

   
    const professorId = '62f5a3ff6845bd05cbec0943'
    const subjectCredits = 4

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(RATE_URL,

                JSON.stringify({ subject, modality, userGrade, wouldTakeAgain, rate, tag, difficulty, professorId, subjectCredits }),
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer: ${seth.accessToken}`

                    },
                    withCredentials: true
                });
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response))
            setSubject('')
            setModality('')
            setUserGrade(0)
            setWouldTakeAgain(0)
            setRate(0)
            setTag([])
            setDifficulty(0)

        } catch (err) {
            if (!err?.response) {
                setErrorMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrorMsg('Username Taken');
            } else {
                setErrorMsg('Registration Failed')
                console.log( subject,  modality,  userGrade, wouldTakeAgain, rate, tag, difficulty,  professorId,  subjectCredits)
                console.log(typeof subject, typeof modality, typeof userGrade,typeof wouldTakeAgain,typeof rate,typeof tag,typeof difficulty, typeof professorId, typeof subjectCredits)
            }
        }
    }

    return (

        <div className="statistics-container-principal">

            <section className="name-ranking-container">
                <h2>Nuevo ranking</h2>

                <div className="name-picture-profesor-container">
                    <i className="icon-picture-Profesor">
                        <TbLetterF />
                    </i>
                </div>

                <section className="name-professor-container">
                    <h2>Francisco Terrega</h2>
                    <br />
                    <br />
                    <p>{errMsg}</p>
                </section>

            </section>


            <form onSubmit={handleSubmit} >
                <div className="campos-form-profesor-container">

                    <section className="campos-registro-izquierda">
                        <div className="ranking-Materia-container">
                            <div>
                                <p >Materia</p>
                            </div>

                            <div className="ranking-input-materia">
                                <select placeholder="Selecciona una asignatura" onChange={(e) => setSubject(e.target.value)} className="select-materia">
                                    <option value="" disabled selected>Selecciona una asignatura</option>
                                    <option value="Matematicas">Matematicas</option>
                                    <option value="Quimica">Quimica</option>
                                    <option value="Laboratorio de Informatica">Laboratorio de Informatica</option>
                                    <option value="Fisica">Fisica</option>
                                </select>
                            </div>
                        </div>

                        <div className="ranking-Modalidad-container">
                            <div>
                                <p >Modalidad</p>
                            </div>

                            <div className="ranking-input-modalidad">
                                <select onChange={(e) => setModality(e.target.value)} className="select-modalidad">
                                    <option value="" disabled selected>Selecciona una modalidad</option>
                                    <option>Presencial</option>
                                    <option>Virtual</option>
                                </select>
                            </div>
                        </div>

                        <div className="ranking-Nota-container">
                            <div>
                                <p >Nota</p>
                            </div>

                            <div className="ranking-input-nota">
                                <input onChange={(e) => setUserGrade(e.target.value)} className="select-nota" type="number" min="0" max="5"

                                />
                            </div>
                        </div>

                        <div className="ranking-tomaria-container">
                            <div>
                                <p >¿Lo tomaría de nuevo?</p>
                            </div>

                            <div className="ranking-input-tomaria">
                                <label className="label-yes" htmlFor="Yes">Si</label>
                                <input onClick={(e) => setWouldTakeAgain(e.target.value)} id="Yes" className="select-tomaria-yes" name="tomariaProfesor" value={true} type="radio" />

                                <label htmlFor="No">No</label>
                                <input onClick={(e) => setWouldTakeAgain(e.target.value)} id="No" name="tomariaProfesor" className="select-tomaria-no" value={false} type="radio" />

                            </div>
                        </div>






                    </section>

                    <section className="campos-registro-derecha">
                        <div className="ranking-puntuacion-container">
                            <div>
                                <p >Puntuación</p>
                            </div>

                            <div className="ranking-input-puntuacion">
                                <input className="select-puntuacion" type="range" min="0" max="5"
                                    onChange={(e) => setRate(e.target.value)}
                                />
                                <div className="imput-range-val">
                                    <p>{rate}</p>
                                </div>
                            </div>
                        </div>

                        <div className="ranking-Etiquetas-container">
                            <div>
                                <p >Etiquetas</p>
                            </div>

                            <div className="ranking-input-Etiquetas">
                                <Multiselect
                                    isObject={false}
                                    options={options}
                                    onSelect={(e) => {
                                        setTag(e)
                                        console.log(tag)

                                    }}
                                    onRemove={(e) => {
                                        setTag(e)
                                        console.log(tag)
                                    }}
                                    showCheckbox
                                    placeholder="Selecciona etiquetas"
                                    style={{
                                        multiselectContainer: {
                                            width: '400px',
                                            'font-family': "var(--fuente-Primaria)"

                                        },
                                        searchBox: {
                                            background: 'none',
                                            border: 'none'
                                        },
                                        inputField: {
                                            cursor: "pointer",
                                            'font-family': "var(--fuente-Primaria)"

                                        },
                                        chips: {
                                            "background": "var(--color-Primario)",
                                            'font-family': "var(--fuente-Primaria)",
                                            color: "black"
                                        },
                                        optionContainer: {
                                            'font-family': "var(--fuente-Primaria)"
                                        },
                                        option: {

                                        },
                                        groupHeading: {
                                            'font-family': "var(--fuente-Primaria)"
                                        }

                                    }}


                                />
                            </div>

                        </div>

                        <div className="ranking-dificultad-container">
                            <div>
                                <p >Nivel de dificultad</p>
                            </div>

                            <div className="ranking-input-dificultad">
                                <input className="select-dificultad" type="range" min="0" max="5"
                                    onChange={(e) => setDifficulty(e.target.value)}
                                />
                                <div className="imput-rangeDif-val">
                                    <p>{difficulty}</p>
                                </div>
                            </div>
                        </div>

                        <div className="container-enviarRating">
                            <button className="btn-enviar-rating">
                                Enviar rating
                            </button>
                        </div>



                    </section>
                </div>

            </form>






        </div>
    )
}

export default StatisticsPerfil;


