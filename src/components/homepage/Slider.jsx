import React from 'react'

const Slider = (props) => (
    <div id="sliderContainer">
        <div className="white"></div>
        <p className="place">Notaría 2 - Tula, Hgo.</p>
        <button id="btnConocenos" onClick={props.goKnowUs}>Conócenos</button>
        {
            props.actualImage ?
            <img src={props.actualImage} alt="cover" id="imgC" style={{
              'animation':'enter 2s'
            }}/>
            : null
        }

    </div>
)
export default Slider
