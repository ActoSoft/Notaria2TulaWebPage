import React from 'react'
import sandClock from '../../static/assets/Icons/sand-clock.png'
import money from '../../static/assets/Icons/money (2).png'
import leftArrow from '../../static/assets/Icons/left-arrow.png'
import rightArrow from '../../static/assets/Icons/right-arrow.png'
import leftMobile from '../../static/assets/Icons/left-arrow.svg'
import rightMobile from '../../static/assets/Icons/right-arrow.svg'

const Procedures = (props) => (
    <div id="viewProcedures">
        <p id="titleProcedures">Trámites que realizamos</p>
        <div className="proceduresMobile">
            <div className="serviceMobile">
                <p>{props.data[props.actual].categoria}</p>
            </div>
            <div className="arrowContainerMobile">
                {props.actual>0 ? <img src={leftMobile} onClick={()=>{props.up(false)}}/> : null }
                {props.actual<4 ? <img src={rightMobile} onClick={()=>{props.up(true)}}/> : null }
            </div>
            <div className="borderDivMobile">
                <div className="servicesContainerMobile">
                    {props.data[props.actual].tramites.map((tramite,index)=>(
                        <p>{tramite}</p>
                    ))}
                </div>
            </div>
        </div>
        <div className="proceduresContainer">
            <div className="arrowTopContainer">
                <img className="arrowsTop" src={leftArrow} onClick={()=>{props.moveTop(false)}}  style={{display : props.minOp<=0 ? 'none' : 'block'}}/>
            </div>
            {props.data.map((tramite, index)=>(
                <div className="service" onClick={()=>{props.openService(index)}} id={"blackService"+index}>
                    <p className="serviceTitle">{tramite.categoria}</p>
                </div>
            ))}
            <div className="arrowTopContainer">
                <img className="arrowsTop" src={rightArrow} onClick={()=>{props.moveTop(true)}} style={{display: props.maxOp>=4 ? "none" : "block"}}/>
            </div>
        </div>
        <div className="otherContainerOp">
            <div className="arrowContainer">
                <img className="arrows" src={leftArrow} onClick={()=>{props.move(false)}} />
            </div>
            <div className="op">
            </div>
            <div className="arrowContainer">
                <img className="arrows" src={rightArrow} onClick={()=>{props.move(true)}} />
            </div>
        </div>
    </div>
)

export default Procedures