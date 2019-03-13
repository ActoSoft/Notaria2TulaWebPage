import React, { Component } from 'react'
import './homepage.scss'
import location from '../../assets/img/location.png'
import clock from '../../assets/img/clock.svg'
import email from '../../assets/img/email.svg'
import phone from '../../assets/img/phone.svg'
import placeholder from '../../assets/img/placeholder-map.svg'

class HomePage extends Component {

  constructor(props){
      super(props)
      this.state = {
        urls:[
          "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2018-01/tula-hidalgo.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kiosktula.JPG/1200px-Kiosktula.JPG",
          "http://www.miambiente.com.mx/wp-content/uploads/Ex-convento-de-San-Jose-Tula.jpg"
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
    cont>=3 ? cont=0 : cont=cont;
    cont<0 ? cont=2 : cont=cont;
    let newImg = document.createElement("img");
    newImg.setAttribute('src', this.state.urls[cont]);
    newImg.setAttribute('id', "imgC");

    image ? container.appendChild(newImg) : console.log("no hay2");
    cont=cont+1;
    this.setState({cont});
  }

  render(){
    return(
      <div>
        <div id="sliderContainer">
          <div id="black"></div>
          <p id="place">Notaría 2 - Tula, Hgo.</p>
          <button id="btnConocenos">Conócenos</button>
        </div>
        <p id="fullPlace">Notaria Pública #2 del Distrito Judicial de Tula
        de Allende, Hidalgo, y del Patrimonio Inmobiliario Federal</p>
        <div id="descContainer">
          <p id="description">or hgoihpor wib gvporiugpb esp aytrvyawvoi troaibeshto pihweortvba tvbwaiy
          ewvñtyvbw oapytpwuer ytnv8wryb t0vw9ayt 9bpw9pvetu
          twevi ewyoyvwevrwteb w tgwj0igtw 0irhgt9wrhg0hwr0gh 0iwrhg0w 0gi hwa0ig h0wihg0 innerWidthf rwiahr0gi w0 gw0i hy0
          f wiuo wiyf9 uhwro ghwoa ghowrhg orhgo wrigh owuhg owurhg wauhrgou awhfeowuehf o<i>Continuar leyendo...</i></p>
          <div className="question">
            <span>¿Tienes algún problema legal?</span>
            <button>Trámites disponibles</button>
          </div>
        </div>
        <div id="viewProcedures">
          <span>Trámites que realizamos</span>
          <div id="procedureContainer">
            <div>
              <p>Trámites de propiedad / bienes inmuebles <button>+</button></p>
            </div>
            <div>
              <p>Suceciones  <button>+</button></p>
            </div>
            <div>
              <p>Constitucion de sociedades <button>+</button></p>
            </div>
            <div>
              <p>Testamentos <button>+</button></p>
            </div>
            <div>
              <p>Trámites diversos <button>+</button></p>
            </div>
          </div>
        </div>

        <div id="informationContainer">
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
        </div>
        <div id="partTwoIC">
          <div className="infoCard">
            <img src={clock}/>
            <p><span>Lunes a Viernes: 9:00 hrs. - 18:00 hrs.</span>
            <span>Sábados: 9:00 hrs. - 13:00 hrs.</span>
            <span>Domingos: No laboramos</span></p>
          </div>
          <div className="question">
            <span>¿Tienes algún problema legal?</span>
            <button>Trámites disponibles</button>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
