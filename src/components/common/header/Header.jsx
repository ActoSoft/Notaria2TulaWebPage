import React, {Component} from 'react'
import './header.scss'
import logo from '../../../static/assets/Logo_transparencia.png'
import {NavLink} from 'react-router-dom'

class Header extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  componentDidMount = () =>{
    window.addEventListener('resize', this.updateOptions);
  }

  render(){
    return(
      <div id="head">
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
