import "../styles/Header.css"
import { TbLetterM } from "react-icons/tb";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { useRef, useEffect } from "react";
import SideBarDetail from './sideBarDetail';
import { useState } from "react";
import { NavLink } from "react-router-dom";



function SideBar() {

    const [side, setSide] = useState(false)


    const visibleSideBar = () => {

        if (side === false) {
            setSide(true);
        } else {
            setSide(false)
        }
        console.log(side)
    }

    return (
        <>


            <div className="sideBar-Principal-Container">
                <div className="profile-container">
                    <button onClick={visibleSideBar} className="button-profile">
                        <i className="profile-Icon">
                            <TbLetterM />
                        </i>
                    </button>
                </div>

                <div className="statistics-container">
                    <NavLink to="/statistics">
                        <button className="button-statistics">

                            <i className="statistics-Icon">
                                <BsFillFileBarGraphFill />
                            </i>
                        </button>
                    </NavLink>

                </div>

                <div className="notifications-container">
                    <NavLink to="/perfilProfesor">
                        <button className="button-notifications">
                            <i className="notifications-Icon">
                                <FaBell />
                            </i>
                        </button>
                    </NavLink>
                </div>

            </div>

            {
                side && <SideBarDetail />
            }
        </>

    )

}

export default SideBar;