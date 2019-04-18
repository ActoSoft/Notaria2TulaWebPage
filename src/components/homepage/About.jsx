import React from 'react'
import {NavLink} from 'react-router-dom'
const About = (props) => (
    <div className="aboutContainer" id="abCont">
        <p className="fullPlace">Notaría Pública #2 del Distrito Judicial de Tula
        de Allende, Hidalgo, y del Patrimonio Inmobiliario Federal</p>
        <div className="descContainerHome">
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.<i>Continuar leyendo...</i></p>
            <img
            className="image-mobile"
            src={props.imageMobile}
            alt="Pa mamoenar"
            />
        <div className="question">
            <span>¿Tienes algún problema legal?</span>
            <NavLink to="/tramites/" className="link">
                <button>Trámites disponibles</button>
            </NavLink>
        </div>
        </div>
    </div>
)

export default About
