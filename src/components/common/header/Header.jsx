import React from 'react'
import './header.scss'
import {NavLink} from 'react-router-dom'

const Header = (props) => (
  <div className="head">
    <ul id="navbar">
      <NavLink to="/" className="link">
        <li className="itemNav">Home</li>
      </NavLink>
      <NavLink to="/nosotros/" className="link">
        <li className="itemNav">Información</li>
      </NavLink>
      <NavLink to="/tramites/" className="link">
        <li className="itemNav">Servicios</li>
      </NavLink>
      <NavLink to="/contacto/" className="link">
        <li className="itemNav">Contacto</li>
      </NavLink>
      <NavLink to="/tramites/:slug/" className="link">
        <li className="itemNav">Servicio</li>
      </NavLink>
      <li></li>
    </ul>
  </div>
)

export default Header
