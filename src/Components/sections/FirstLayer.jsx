import '../styles/FirstLayerStyles.css'
import { FaSearch } from "react-icons/fa";
import NameApp from "../sections/NameApp";
import ImgFirstLayer from "../sections/imgComponents";


export const Firstlayer = () => {

    function qlicar() {
        console.log("hey");
    }


    return (
        <div>

            <div className='title-container'>
                <div className='name-container'>
                    <NameApp />
                </div>

                <div className='description-container'>
                    <p> Ranking, asesoramiento y comentarios de forma<br />
                        anonima
                    </p>
                </div>
            </div>



            <div className='top-container'>
                <div className='Principal-Container'>
                    <div className='Text-Container'>
                        <p>Busca al profesor que tienes en mente</p>
                    </div>

                    <div className='Search-Button-container'>

                        <div className='Search-Container'>
                            <div className='input-Container'>
                                <input className='input-text' type="text" />
                            </div>
                        </div>

                        <div className='Button-Container'>
                            <button className='Button-Search' onClick={qlicar}>
                                <i className='icon-button'><FaSearch></FaSearch></i>
                            </button>
                        </div>
                    </div>
                </div>


                {/* <div>
                    <img src={<ImgFirstLayer/>} alt="imgsvg" />
                 </div>*/}


            </div>
        </div>
    )

}







