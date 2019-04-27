import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import tramitesCover from '../../../static/img/TramitesBack.jpg'
import tramites0 from '../../../static/img/tramites0.jpg'
import tramites1 from '../../../static/img/tramites1.jpg'
import tramites2 from '../../../static/img/tramites2.jpg'
import tramites3 from '../../../static/img/tramites3.jpg'
import tramites4 from '../../../static/img/tramites4.jpg'
import tramites5 from '../../../static/img/tramites5.jpg'
import tramites6 from '../../../static/img/tramites6.jpg'

import downArrow from '../../../static/assets/Icons/angle-arrow-down.svg'
import upArrow from '../../../static/assets/Icons/up-arrow.svg'
import './services.scss'

class Services extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    categoria: "Transmisiones de propiedad/bienes inmuebles",
                    tramites: [
                        "Jornada Notarial",
                        "Compraventa",
                        "Donación",
                        "Adjudicación por herencia",
                        "Constitución de condominio",
                        "Cancelación de hipoteca",
                        "Fideicomiso"
                    ]
                },
                {
                    categoria: "Sucesiones",
                    tramites: [
                        "Adjudicación por herencia",
                        "Asesoría Jurídica",
                        "Cesión de derechos hereditarios"
                    ]
                },
                {
                    categoria: "Constitución de sociedades",
                    tramites: [
                        "Sociedad Anónima de Capital Variable",
                        "Sociedad de Responsabilidad Limitada",
                        "Sociedad Anónima Promotora de Inversión",
                        "Sociedad Civil",
                        "Asociación Civil"
                    ]
                },
                {
                    categoria: "Testamento",
                    tramites: [
                        "Spetiembre y Octubre, mes del testamento"
                    ]
                },
                {
                    categoria: "Trámites diversos",
                    tramites: [
                        "Sociedad Anónima de Capital Variable",
                        "Sociedad de Responsabilidad Limitada",
                        "Sociedad Anónima Promotora de Inversión",
                        "Sociedad Civil",
                        "Asociación Civil"
                    ]
                },
            ],
            backImage:[
              tramites0,
              tramites1,
              tramites2,
              tramites3,
              tramites4,
              tramites5,
              tramites6
            ],
            idcategoriaActual: 0,
            activeArrow:false,
            width: 0,
            message: "Hola. Deseo obtener información acerca del trámite"
        }
    }

    imageService = () =>{

      let number = Math.floor(Math.random() * (+6 - +0)) +0
      //console.log(number);
      return number;
    }

    doIn = () => {
      let { width } = this.state
      width = window.innerWidth
      let under = document.getElementsByClassName("titleService")[this.state.idcategoriaActual]
      let paint = document.getElementById("paint"+this.state.idcategoriaActual)
      let otros = document.getElementsByClassName("forMobile")
      if(width > 600) {
        under.style.textDecoration = "underline"
        paint.style.backgroundColor = "#006"
        for(let i=0; i<otros.length; i++){
          otros[i].className = "forMobile forDesktop"
        }
      } else {
        under.style.textDecoration = ""
        paint.style.backgroundColor = "transparent"
        for(let i=0; i<otros.length; i++){
          otros[i].className = "forMobile"
        }
      }
      this.setState({ width })
    }
    componentDidMount = () => {
      window.scrollTo(0,0)
      this.doIn()
      window.addEventListener("resize", this.doIn)
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.doIn)
    }

    changeActualCategory = (index) => {
      let { idcategoriaActual, width } = this.state
      width = window.innerWidth
      let under = document.getElementsByClassName("titleService")[index]
      let paint = document.getElementById("paint" + index)
      if(width > 600) {
        paint.style.backgroundColor = "#006"
        under.style.textDecoration = "underline"
      } else {
        paint.style.backgroundColor = "transparent"
        under.style.textDecoration = "none"
      }
      if(index !== idcategoriaActual) {
        let under = document.getElementsByClassName("titleService")[idcategoriaActual]
        under.style.textDecoration = ""
        let painted = document.getElementById("paint"+idcategoriaActual)
        painted.style.backgroundColor = "transparent"
        idcategoriaActual = index
      }

      let parte = document.getElementsByClassName("--sidebar")[0]
      parte.id = "bluepart"
      setTimeout(() => {
        parte.id = "onebluepart"
      }, 1000)
      this.setState({ idcategoriaActual, width })
    }

    activeAndSet = (numero) => {
      let { activeArrow, idcategoriaActual } = this.state
      let flecha = document.getElementById("flecha"+numero)
      if(idcategoriaActual === numero) {
        activeArrow =! activeArrow
        activeArrow === true ? flecha.setAttribute("src", upArrow) : flecha.setAttribute("src", downArrow)
        activeArrow === true ? flecha.className = "downArrow arrowOpen" : flecha.className = "downArrow arrowClose"

      } else {
        if(activeArrow === true) {
          this.viewCardsMobile(idcategoriaActual, !activeArrow)
          let flechaB = document.getElementById("flecha"+idcategoriaActual)
          flechaB.setAttribute("src", downArrow);
          flechaB.className = "downArrow arrowClose"
        } else {
          activeArrow = !activeArrow
        }
        flecha.setAttribute("src", upArrow)
        flecha.className="downArrow arrowOpen"
        idcategoriaActual = numero
      }
      this.viewCardsMobile(numero, activeArrow)
      this.setState({ idcategoriaActual, activeArrow })
    }

    viewCardsMobile = (numero, hacer) => {
      let actual = this.state.data[numero].categoria
      let view = document.getElementById(actual)
      hacer === true ? view.style.display = "flex" : setTimeout(()=> {
        view.style.display = "none"
      }, 500)
      let width = window.innerWidth
      if(width < 600)
      hacer===true ? view.className = "servicesMobile mobileOpenServices" : view.className = "servicesMobile mobileCloseServices"
      else {
        view.className = "servicesMobile"
      }
    }
    render() {
        return (
          <div>
            <div id="servicesPresentation">
              <div className="white"></div>
              <p className="place">Trámites</p>
              <img 
                src={tramitesCover}
                alt="Services"
                id="servicesImage"
              />
            </div>
            <div className="tramites-container">
                <div className="--sidebar" id="onebluepart">
                    <div className="options">
                        {this.state.data.map((category, index)=>(
                            <div className="forMobile" id={"paint"+index}>
                              <div onClick={() => {this.activeAndSet(index)}} className="inDesktop">
                                <p
                                  key={index + category.categoria}
                                  onClick={() => {this.changeActualCategory(index)}}
                                  className="titleService">
                                    {category.categoria}
                                </p>
                                <img 
                                  src={downArrow}
                                  alt="flecha"
                                  className="downArrow"
                                  id={"flecha"+index}
                                />
                              </div>
                              <div className="servicesMobile" id={category.categoria}>
                                {this.state.data[index].tramites.map((tramite)=>(
                                  <NavLink to={{
                                    pathname:'/contacto/',
                                    aboutProps:{
                                      message:`${this.state.message} ${tramite}, ya que me gustaría realizarlo con ustedes`
                                    }
                                  }} className="sendMessageContactMobile">
                                    <div className="otro">
                                      <img 
                                        src={this.state.backImage[this.imageService()]}
                                        alt="background"
                                        />
                                      <p>{tramite}</p>
                                    </div>
                                  </NavLink>
                                ))}
                              </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="divTramitesContainer">
                      <span>{this.state.data[this.state.idcategoriaActual].categoria}</span>
                      { this.state.data[this.state.idcategoriaActual].tramites.map((tramite)=>(
                        <NavLink to={{
                          pathname:'/contacto/',
                          aboutProps:{
                            message:`${this.state.message} ${tramite}, ya que me gustaría realizarlo con ustedes`
                          }
                        }} className="sendMessageContact">
                          <div className="tramiteCard" >
                            <img 
                              src={this.state.backImage[this.imageService()]}
                              alt="background"
                            />
                            <p>{tramite}</p>
                          </div>
                        </NavLink>
                      ))}
                    </div>
            </div>
          </div>
        )
    }

}

export default Services
