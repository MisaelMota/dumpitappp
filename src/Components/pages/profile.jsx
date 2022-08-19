import "../styles/statistics.css"
import { FaBell } from "react-icons/fa";
import { TbLetterF } from "react-icons/tb";
import { useState, useEffect } from "react";
import AuthProv from "../../context/AuthProvider";
import { useContext } from "react";
import Multiselect from "multiselect-react-dropdown"
import axios from "../../Hooks/axios";
import { config } from "@fortawesome/fontawesome-svg-core";

const PROFESSOR_URL = '/professor_id'

function Profile() {

    const [errMsg, setErrorMsg] = useState('')
    const [proData, setProData] = useState()
    const [data, setData] = useState()
    const [error, setError] = useState()
    console.log(localStorage.getItem('token'))




    const professorId = '62f5a3ff6845bd05cbec0943'


    useEffect(() => {
        axios.get(PROFESSOR_URL,
            {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },params:{
                    professor_id:professorId
                },
                withCredentials: true

            })
            .then(data => {setData(data.data)
                console.log(data)
            })
            .catch(err => {setError(err)
                console.log(err)
            })
    }, [])


    return (

        <div className="statistics-container-principal">

            <section className="name-ranking-container">


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


            <div className="campos-form-profesor-container">

                <section className="campos-registro-izquierda">
                    <div className="ranking-Materia-container">
                        <div>
                            <p >Materia</p>
                        </div>

                        <div className="ranking-input-materia">
                            <input className="select-materia" type="text" />
                        </div>
                    </div>

                    <div className="ranking-Modalidad-container">
                        <div>
                            <p >Modalidad</p>
                        </div>

                        <div className="ranking-input-modalidad">
                            <input className="select-modalidad" type="text" />
                        </div>
                    </div>

                    <div className="ranking-Modalidad-container">
                        <div>
                            <p >Modalidad</p>
                        </div>

                        <div className="ranking-input-modalidad">
                            <input className="select-modalidad" type="text" />
                        </div>
                    </div>

                    <div className="ranking-Modalidad-container">
                        <div>
                            <p >Modalidad</p>
                        </div>

                        <div className="ranking-input-modalidad">
                            <input className="select-modalidad" type="text" />
                        </div>
                    </div>

                </section>

                <section className="campos-registro-derecha">
                    <div className="ranking-Materia-container">
                        <div>
                            <p >Materia</p>
                        </div>

                        <div className="ranking-input-materia">
                            <input className="select-materia" type="text" />
                        </div>
                    </div>

                    <div className="ranking-Modalidad-container">
                        <div>
                            <p >Modalidad</p>
                        </div>

                        <div className="ranking-input-modalidad">
                            <input className="select-modalidad" type="text" />
                        </div>
                    </div>



                    <div className="ranking-Modalidad-container">
                        <div>
                            <p >Modalidad</p>
                        </div>

                        <div className="ranking-input-modalidad">
                            <input className="select-modalidad" type="text" />
                        </div>
                    </div>

                    <div className="ranking-Modalidad-container">
                        <div>
                            <p >Modalidad</p>
                        </div>

                        <div className="ranking-input-modalidad">
                            <input className="select-modalidad" type="text" />
                        </div>
                    </div>



                </section>
            </div>







        </div>
    )
}

export default Profile;
