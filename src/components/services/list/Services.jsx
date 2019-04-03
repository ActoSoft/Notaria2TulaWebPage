import React, { Component } from 'react'
import aboutUs from '../../../static/assets/back1.jpeg'
import downArrow from '../../../static/assets/Icons/angle-arrow-down.svg'
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
            idcategoriaActual: 0
        }
    }

    changeActualCategory = (index) =>{
      let {idcategoriaActual} = this.state
      idcategoriaActual = index
      this.setState({idcategoriaActual})
    }

    render() {
        return (
          <div>
            <div id="servicesPresentation">
              <div className="white"></div>
              <p className="place">¿Quienes sómos?</p>
              <img src={aboutUs} alt="Services" id="servicesImage"/>
            </div>
            <div className="tramites-container">
                <div className="--sidebar">
                    <div className="options">
                        {this.state.data.map((category, index)=>(
                            <div className="forMobile">
                              <p
                              key={index + category.categoria}
                              onClick={()=>{this.changeActualCategory(index)}}
                              className="titleService">
                                  {category.categoria}
                              </p>
                              <img src={downArrow} alt="flecha" className="downArrow"/>
                              <div className="servicesMobile">
                                {this.state.data[index].tramites.map((tramite)=>(
                                  <div className="otro">
                                    <img src={aboutUs}/>
                                    <p>{tramite}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                        ))}
                    </div>
                    <div id="divTramitesContainer">
                      <span>{this.state.data[this.state.idcategoriaActual].categoria}</span>
                      {this.state.data[this.state.idcategoriaActual].tramites.map((tramite)=>(
                        <div className="tramiteCard">
                          <img src={aboutUs}/>
                          <p>{tramite}</p>
                        </div>
                        //console.log(tramite.tramites[index])
                      ))}
                    </div>
                </div>
            </div>
          </div>
        )
    }

}

export default Services
