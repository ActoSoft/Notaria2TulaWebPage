import React from 'react'
import {NavLink} from 'react-router-dom'
import leftArrow from '../../static/assets/Icons/left-arrow.png'
import rightArrow from '../../static/assets/Icons/right-arrow.png'
import leftMobile from '../../static/assets/Icons/left-arrow.svg'
import rightMobile from '../../static/assets/Icons/right-arrow.svg'

const Procedures = (props) => (
    <div id="viewProcedures">
        <p id="titleProcedures">Trámites que realizamos</p>
        <div className="proceduresMobile">
            <div className="containerServiceMobile">
                <div className="serviceMobile">
                    <p>{props.data[props.actual].categoria}</p>
                </div>
            </div>
            <div className="arrowContainerMobile">
                {props.actual>0 ? <img src={leftMobile} alt="left" onClick={()=>{props.up(false)}}/> : null }
                {props.actual<4 ? <img src={rightMobile} alt="right" onClick={()=>{props.up(true)}}/> : null }
            </div>
            <div className="borderDivMobile">
                <div className="servicesContainerMobile">
                    {props.data[props.actual].tramites.map((tramite,index)=>(
                        <NavLink to={{
                            pathname:'/contacto/',
                            aboutProps:{
                                message:`${props.message} ${tramite} con ustedes`
                            }
                        }} className="navlinkMobile">
                            <p>{tramite}</p>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
        <div className="proceduresContainer">
            <div className="arrowTopContainer">
                <img className="arrowsTop" src={leftArrow} alt="arrowTop" onClick={()=>{props.moveTop(false)}}  style={{display : props.minOp<=0 ? 'none' : 'block'}}/>
            </div>
            {props.data.map((tramite, index)=>(
                <div className="service" onClick={()=>{props.openService(index)}} id={"blackService"+index}>
                    <p className="serviceTitle">{tramite.categoria}</p>
                </div>
            ))}
            <div className="arrowTopContainer">
                <img className="arrowsTop" src={rightArrow} alt="rightArrow" onClick={()=>{props.moveTop(true)}} style={{display: props.maxOp>=4 ? "none" : "block"}}/>
            </div>
        </div>
        <div className="otherContainerOp">
            <div className="arrowContainer">
                <img className="arrows" src={leftArrow} alt="leftArrow" onClick={()=>{props.move(false)}} />
            </div>
            <NavLink to={props.activeNav  ?
                {
                    pathname:'/contacto/',
                    aboutProps:{
                        message:props.message
                    }
                }
                :
                ""
            } className="navlinkOp">
                <div className="op">
                </div>
            </NavLink>
            <div className="arrowContainer">
                <img className="arrows" src={rightArrow} alt="right" onClick={()=>{props.move(true)}} />
            </div>
        </div>
    </div>
)

export default Procedures