import React from 'react'
import sandClock from '../../static/assets/Icons/sand-clock.png'
import money from '../../static/assets/Icons/money (2).png'
import donate from '../../static/assets/Icons/donate.png'
import leftArrow from '../../static/assets/Icons/left-arrow.png'
import rightArrow from '../../static/assets/Icons/right-arrow.png'
import plus from '../../static/assets/Icons/plus.png'

const Procedures = (props) => (
    <div id="viewProcedures">
        <span>Trámites que realizamos</span>
        <div id="procedureContainer">
        <div>
            <p id="firstProcedure">Trámites de propiedad / bienes inmuebles <img src={plus} alt="plus"/></p>
            <div class="optionsProcedures">
            <img src={leftArrow} alt="left"/>
            <div id="procedureJL">
                <p>Jornada Laboral</p>
                <img src={sandClock} alt="reloj de arena"/>
            </div>
            <div id="procedureCV">
                <p>Compra Venta</p>
                <img src={money} alt="dinero"/>
            </div>
            <div id="procedureD">
                <p>Donación</p>
                <img src={donate} alt="donación"/>
            </div>
            <img src={rightArrow} alt="left"/>
            </div>
        </div>
        <div>
            <p>Suceciones  <img src={plus} alt="plus"/></p>
        </div>
        <div>
            <p>Constitucion de sociedades <img src={plus} alt="plus"/></p>
        </div>
        <div>
            <p>Testamentos <img src={plus} alt="plus"/></p>
        </div>
        <div>
            <p id="lastProcedure">Trámites diversos <img src={plus} alt="plus"/></p>
        </div>
        </div>
    </div>
)

export default Procedures