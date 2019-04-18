import React from 'react'
import './bottomButon.scss'
import upArrow from '../../../static/assets/Icons/left-arrow.svg'
const BottomButon = (props) =>(
    <div id="fixedButon">
        <img src={upArrow} onClick={()=>{props.up()}}/>
    </div>
)

export default BottomButon