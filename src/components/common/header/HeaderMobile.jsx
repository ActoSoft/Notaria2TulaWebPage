import React from 'react'
import menu from '../../../static/assets/Icons/menu.png'
import logo from '../../../static/assets/Logo_transparencia.png'
import './header.scss'
const HeaderMobile = (props) =>
(
    <div className="header-mobile-container">
        <div className="header-top">
            <img src={menu} className="hamburger" alt="hamburger"/>
            <img src={logo} className="logo" alt="logo" />
        </div>
    </div>
)
export default HeaderMobile
