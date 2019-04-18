import React from 'react'
import clock from '../../static/img/clock.svg'
import email from '../../static/img/email.svg'
import phone from '../../static/img/phone.svg'
import placeholder from '../../static/img/placeholder-map.svg'
import {NavLink} from 'react-router-dom'

const InfoAbout = (props) => (
    <div className="aboutContainer">
        <div id="partOneIC">
        <div>
            <div className="infoCard">
            <img src={placeholder} alt="Ubicación"/>
            <p>Calle Matamoros Número 204, Colonia Barrio Alto,
            Municipio de Tula Allende, Hidalgo, Código Postal 42807</p>
            </div>
            <div className="infoCard">
            <img src={email} alt="Email"/>
            <p>correodummy@gmail.com</p>
            </div>
            <div className="infoCard">
            <img src={phone} alt="Teléfono"/>
            <p><span>(01) 773-73-2-00-75</span>
            <span>&</span><span>(01) 773-73-201-91</span></p>
            </div>
        </div>
        {/*<img src={location} id="map" alt="Mapa"/>*/}
        <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.9131865364257!2d-99.34580076574983!3d20.05407868518722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d22d6b4546bacf%3A0xc975d5f27b35a2ea!2sNotar%C3%ADa+P%C3%BAblica+No.+2!5e0!3m2!1ses!2smx!4v1553021271216" frameBorder="0" allowFullScreen />
        </div>
        <div id="partTwoIC">
        <div className="infoCard">
            <img src={clock} alt="Horarios"/>
            <p><span>Lunes a Viernes: 9:00 hrs - 18:00 hrs.</span>
            <span>Sábados: 9:00 hrs. - 13:00 hrs.</span>
            <span>Domingos: No laboramos</span></p>
        </div>
        <hr className="division"/>
        <div className="question">
            <span>¿Desea realizar algún trámite con nosotros?</span>
            <NavLink to="/contacto/" className="link">
            <button>Contáctanos</button>
            </NavLink>
        </div>
        </div>
    </div>
)

export default InfoAbout