import React, { Component } from 'react'
import aboutUs from '../../../static/assets/back1.jpeg'
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
            idcategoriaActual: 0,
            activeArrow:false,
            width: 0
        }
    }
    componentDidMount = () =>{
      window.addEventListener('resize', (event) =>{
        let {width} = this.state
        width=window.innerWidth
        let paint=document.getElementById("paint"+this.state.idcategoriaActual)
        if(width>600){
          paint.style.backgroundColor="#006"
        }else{
          paint.style.backgroundColor="transparent"
        }
        //console.log(this.state.width)
        this.setState({width})
      });
    }

    changeActualCategory = (index) =>{
      let {idcategoriaActual} = this.state
      let {width}=this.state
      width=window.innerWidth
      let paint=document.getElementById("paint"+index)
      if(width>600){
        paint.style.backgroundColor="#006"
      }else{
        paint.style.backgroundColor="transparent"
      }
      if(index!=idcategoriaActual){
        let painted=document.getElementById("paint"+idcategoriaActual)
        painted.style.backgroundColor="transparent"
        idcategoriaActual = index
      }

      this.setState({idcategoriaActual, width})
    }

    activeAndSet = (numero) =>{
      //console.log(numero);
      let {activeArrow} = this.state
      let {idcategoriaActual} = this.state
      let flecha=document.getElementById("flecha"+numero);
      //console.log(activeArrow)
      if(idcategoriaActual===numero){
        activeArrow=!activeArrow
        activeArrow===true ? flecha.setAttribute("src",upArrow) : flecha.setAttribute("src",downArrow)
      }else{
        if(activeArrow===true){
          this.viewCardsMobile(idcategoriaActual, !activeArrow)
          let flechaB=document.getElementById("flecha"+idcategoriaActual);
          flechaB.setAttribute("src",downArrow);
        }else{
          activeArrow=!activeArrow
        }
        flecha.setAttribute("src",upArrow);
        idcategoriaActual=numero
      }
      this.viewCardsMobile(numero, activeArrow)
      this.setState({idcategoriaActual,activeArrow})
    }

    viewCardsMobile = (numero, hacer) =>{
      let actual=this.state.data[numero].categoria;
      //console.log(actual);
      let view=document.getElementById(actual);
      //console.log(view);
      //console.log(hacer)
      hacer===true ? view.style.display="flex" : view.style.display="none"
      return 0;
    }
    render() {
        return (
          <div>
            <div id="servicesPresentation">
              <div className="white"></div>
              <p className="place">Trámites</p>
              <img src={aboutUs} alt="Services" id="servicesImage"/>
            </div>
            <div className="tramites-container">
                <div className="--sidebar">
                    <div className="options">
                        {this.state.data.map((category, index)=>(
                            <div className="forMobile" id={"paint"+index}>
                              <div onClick={()=>{this.activeAndSet(index)}} className="inDesktop">
                              <p
                              key={index + category.categoria}
                              onClick={()=>{this.changeActualCategory(index)}}
                              className="titleService">
                                  {category.categoria}
                              </p>
                              <img src={downArrow} alt="flecha" className="downArrow" id={"flecha"+index}/>
                              </div>
                              <div className="servicesMobile" id={category.categoria}>
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
        )
    }

}

export default Services
