import React, { Component } from 'react'
import './homepage.scss'
import location from '../../static/assets/placeInMap.png'
import clock from '../../static/img/clock.svg'
import email from '../../static/img/email.svg'
import phone from '../../static/img/phone.svg'
import placeholder from '../../static/img/placeholder-map.svg'
import sandClock from '../../static/assets/Icons/sand-clock.png'
import money from '../../static/assets/Icons/money (2).png'
import donate from '../../static/assets/Icons/donate.png'
import leftArrow from '../../static/assets/Icons/left-arrow.png'
import rightArrow from '../../static/assets/Icons/right-arrow.png'
import plus from '../../static/assets/Icons/plus.png'
import back1 from '../../static/assets/back1.jpeg'
import back2 from '../../static/assets/back2.jpeg'
import back3 from '../../static/assets/back3.jpeg'

class HomePage extends Component {

  constructor(props){
      super(props)
      this.state = {
        urls:[
          back1,
          back2,
          back3
        ],
        cont: 1,
        interval: null,
      }
  }

  componentDidMount = () =>{
    let { interval } = this.state;
    interval = window.setInterval(this.change, 5000);

    let container=document.getElementById('sliderContainer')
    let img = document.createElement("img")

    img.setAttribute('src', this.state.urls[0])
    img.setAttribute('id', "imgC")
    container.appendChild(img)

    this.setState({ interval });
  }

  componentWillUnmount = () => {
    let { interval } = this.state;
    clearInterval(interval)
    this.setState({ interval });
  }

  change = () =>{
    let { cont } = this.state;
    let image=document.getElementById('imgC');
    //image ? alert("si hay algo") :  alert("no hay nada")
    let container=document.getElementById('sliderContainer');

    image ? container.removeChild(image) : console.log("no hay");
    if(cont >= 3)
      cont = 0
    else if(cont < 0)
      cont = 2
    let newImg = document.createElement("img");
    newImg.setAttribute('src', this.state.urls[cont]);
    newImg.setAttribute('id', "imgC");

    image ? container.appendChild(newImg) : console.log("no hay2");
    cont=cont+1;
    this.setState({cont});
  }

  goKnowUs = () => {
    let top = document.getElementById('abCont').offsetTop
    console.log(top)
    let scrollStep = top / (1000/30)
    let counter = window.scrollY
    let scrollInterval = setInterval(()=>{
      if(counter<=top){
       // console.log(window.innerHeight)
        window.scrollBy(0, scrollStep)
        counter+=scrollStep
      }else{
        clearInterval(scrollInterval)
      }
    }, 30)
  }

  render(){
    return(
      <div id="homeContent">
        <div id="sliderContainer">
          <div id="black"></div>
          <p id="place">Notaría 2 - Tula, Hgo.</p>
          <button id="btnConocenos" onClick={this.goKnowUs}>Conócenos</button>
        </div>
        <div className="aboutContainer" id="abCont">
          <p id="fullPlace">Notaria Pública #2 del Distrito Judicial de Tula
          de Allende, Hidalgo, y del Patrimonio Inmobiliario Federal</p>
          <div id="descContainer">
            <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est laborum.<i>Continuar leyendo...</i></p>
             <img
              className="image-mobile"
              src={back2}
              alt="Pa mamoenar"
              />
            <div className="question">
              <span>¿Tienes algún problema legal?</span>
              <button>Trámites disponibles</button>
            </div>
          </div>
        </div>
        <div id="viewProcedures">
          <span>Trámites que realizamos</span>
          <div id="procedureContainer">
            <div>
              <p id="firstProcedure">Trámites de propiedad / bienes inmuebles <img src={plus} alt="plus"/></p>
              <div class="optionsProcedures">
                <img src={leftArrow} alt="left"/>
                <div id="procedureJL">
                  <p>Jornada Laboral</p>
                  <img src={sandClock} alt="reloj de arena"/>
                </div>
                <div id="procedureCV">
                  <p>Compra Venta</p>
                  <img src={money} alt="dinero"/>
                </div>
                <div id="procedureD">
                  <p>Donación</p>
                  <img src={donate} alt="donación"/>
                </div>
                <img src={rightArrow} alt="left"/>
              </div>
            </div>
            <div>
              <p>Suceciones  <img src={plus} alt="plus"/></p>
            </div>
            <div>
              <p>Constitucion de sociedades <img src={plus} alt="plus"/></p>
            </div>
            <div>
              <p>Testamentos <img src={plus} alt="plus"/></p>
            </div>
            <div>
              <p id="lastProcedure">Trámites diversos <img src={plus} alt="plus"/></p>
            </div>
          </div>
        </div>
        <div className="aboutContainer">
          <div id="partOneIC">
            <div>
              <div className="infoCard">
                <img src={placeholder}/>
                <p>Calle Matamoros Número 204, Colonia Barrio Alto,
                Municipio de Tula Allende, Hidalgo, Código Postal 42807</p>
              </div>
              <div className="infoCard">
                <img src={email}/>
                <p>correodummy@gmail.com</p>
              </div>
              <div className="infoCard">
                <img src={phone}/>
                <p><span>(01) 773-73-2-00-75</span>
                <span>&</span><span>(01) 773-73-201-91</span></p>
              </div>
            </div>
            <img src={location} id="map"/>
          </div>
          <div id="partTwoIC">
            <div className="infoCard">
              <img src={clock}/>
              <p><span>Lunes a Viernes: 9:00 hrs - 18:00 hrs.</span>
              <span>Sábados: 9:00 hrs. - 13:00 hrs.</span>
              <span>Domingos: No laboramos</span></p>
            </div>
            <hr className="division"/>
            <div className="question">
              <span>¿Desea realizar algún trámite con nosotros?</span>
              <button>Contáctanos</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
