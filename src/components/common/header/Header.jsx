import React, {Component} from 'react'
import './header.scss'
import logo from '../../../static/assets/Logo_transparencia.png'
import {NavLink} from 'react-router-dom'

class Header extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  changePosition = () =>{
    let y=window.scrollY
    let header=document.getElementById("head")
    let logo=document.getElementById("headerLogo")
    let nav=document.getElementById("navbar")
    if(y>10){
      header.className="onChangeHeader"
      logo.className="changeLogo"
      nav.className="changeNav"

      header.style.position="fixed"
      header.style.backgroundColor="#fff"
      header.style.height="50px"

      logo.style.height="40px"

      nav.style.padding="0"
    }else{
      header.className="onOriginalHeader"
      logo.className="originalLogo"
      nav.className="originalNav"

      header.style.position="absolute"
      header.style.backgroundColor="transparent"
      header.style.height="90px"

      logo.style.height="80px"

      nav.style.padding="20px 0 0 0"
    }
  }

  componentDidMount = () =>{
    window.addEventListener('scroll',this.changePosition);
  }

  render(){
    return(
      <div id="head" className="thisHeader">
        <img src={logo} id="headerLogo"/>
        <ul id="navbar">
          <NavLink to="/" className="link" id="deleteI">
            <li className="itemNav" id="inicio">Inicio</li>
          </NavLink>
          <hr/>
          <NavLink to="/nosotros/" className="link" id="deleteN">
            <li className="itemNav" id="nosotros">Nosotros</li>
          </NavLink>
          <hr/>
          <NavLink to="/tramites/" className="link" id="deleteT">
            <li className="itemNav" id="tramites">Trámites</li>
          </NavLink>
          <hr/>
          <NavLink to="/contacto/" className="link" id="deleteC">
            <li className="itemNav" id="contacto">Contacto</li>
          </NavLink>
        </ul>
      </div>
    )
  }
}

export default Header
