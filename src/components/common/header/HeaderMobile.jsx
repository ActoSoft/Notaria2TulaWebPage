import React from 'react'
import menu from '../../../static/assets/Icons/menu.png'
import logo from '../../../static/assets/Logo_transparencia.png'
import {ReactComponent as Close} from '../../../static/assets/Icons/close.svg'
import './header.scss'
import {NavLink} from 'react-router-dom'
const HeaderMobile = (props) =>
{
    const active = props.sidebar ? "active" : null
    return (
    <div className="header-mobile-container">
        <div className="header-top">
            <img src={menu} className="hamburger" alt="hamburger" onClick={props.openSidebar}/>
            <img src={logo} className="logo" alt="logo"/>
        </div>
        <div className={"sidebar " + active}>
            <div className="content">
                <img src={logo} 
                    alt="logo" 
                    className="logo-sidebar"
                    />
                <Close className="close-icon"
                    onClick={props.closeSidebar} 
                    />
                <div className="options">
                    <NavLink to="/" className="link" id="deleteI">
                        <p>Inicio</p>
                    </NavLink>
                    <NavLink to="/nosotros/" className="link" id="deleteN">
                        <p>Nosotros</p>
                    </NavLink>
                    <NavLink to="/tramites/" className="link" id="deleteT">
                        <p>Trámites</p>
                    </NavLink>
                    <NavLink to="/contacto/" className="link" id="deleteC">
                        <p>Contacto</p>
                    </NavLink>
                </div>
            </div>
            <div className="close" onClick={props.closeSidebar}>

            </div>
        </div>
    </div>
    )
}
export default HeaderMobile
