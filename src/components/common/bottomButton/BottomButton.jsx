import React from 'react'
import './bottomButton.scss'
import upArrow from '../../../static/assets/Icons/left-arrow.svg'
const BottomButton = (props) =>(
    <div id="fixedButon">
        <img 
            src={upArrow} 
            onClick={()=>{props.up()}}
            alt="bottom-button"/>
    </div>
)

export default BottomButton