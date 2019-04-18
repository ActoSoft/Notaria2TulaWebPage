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
    let width = window.innerWidth
    if(width>600){
      let height=window.innerHeight;
      let y=window.scrollY
      let header=document.getElementById("head")
      let logo=document.getElementById("headerLogo")
      //let options=document.getElementsByClassName("itemNav")
      if(y>height){
        header.className="onChangeHeader"
        logo.className="changeLogo"

        header.style.position="fixed"
        header.style.backgroundColor="#fff"
        header.style.height="10vh"
        header.style.webkitBoxShadow="0 0 3px rgb(0,0,0,0.21)"

        logo.style.height="9vh"

        /*for(let i=0;i<options.length;i++){
          options[i].style.color="#fff"
        }*/
      }else{
        header.className="onOriginalHeader"
        logo.className="originalLogo"

        header.style.position="absolute"
        header.style.backgroundColor="transparent"
        header.style.height="13vh"
        header.style.webkitBoxShadow="none"

        logo.style.height="12vh"

        /*for(let i=0;i<options.length;i++){
          options[i].style.color="#000"
        }*/
      }
    }else{
      let height=window.innerHeight;
      let y=window.scrollY
      let header=document.getElementsByClassName("header-top")[0]
      let error=document.getElementById("anError")
      //console.log(header)
      //let options=document.getElementsByClassName("itemNav")
      if(y>height){
        header.className="header-top onChangeHeader"

        header.style.position="fixed"
        header.style.top="0"
        header.style.webkitBoxShadow="0 0 3px rgb(0,0,0,0.21)"

        error.style.position="static"

        /*for(let i=0;i<options.length;i++){
          options[i].style.color="#fff"
        }*/
      }else{
        header.className="header-top onOriginalHeader"
        header.style.position="relative"
        header.style.top=""
        header.style.webkitBoxShadow=""

        error.style.position="fixed"

        /*for(let i=0;i<options.length;i++){
          options[i].style.color="#000"
        }*/
      }
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
