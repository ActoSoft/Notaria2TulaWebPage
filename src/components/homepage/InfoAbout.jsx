import React from 'react'
import location from '../../static/assets/placeInMap.png'
import clock from '../../static/img/clock.svg'
import email from '../../static/img/email.svg'
import phone from '../../static/img/phone.svg'
import placeholder from '../../static/img/placeholder-map.svg'

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
        <img src={location} id="map" alt="Mapa"/>
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
            <button>Contáctanos</button>
        </div>
        </div>
    </div>
)

export default InfoAbout