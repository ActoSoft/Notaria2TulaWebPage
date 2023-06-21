import React from 'react'
import './bottomButton.scss'
import upArrow from '../../../static/assets/Icons/left-arrow.svg'
const BottomButton = (props) =>(
    <div id="fixedButon">
        <img src={upArrow} alt="" onClick={()=>{props.up()}}/>
    </div>
)

export default BottomButton