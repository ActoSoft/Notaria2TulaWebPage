import React, {Component} from 'react'
import './info.scss'
import weImage from '../../static/assets/weImage.jpeg'
import logo from '../../static/assets/Logo_transparencia.png'
import communication from '../../static/assets/Icons/communication.svg'
import documentsSecurity from '../../static/assets/Icons/documents-security.svg'
import paper from '../../static/assets/Icons/paper.svg'
import avatar from '../../static/assets/Icons/avatar.png'
import colegioNotarios from '../../static/assets/Icons/colegio notarios.png'
import notariadoMexicano from '../../static/assets/Icons/notariado mexicano.png'

class Info extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return(
      <div>
        <div id="infoPresentation">
          <div className="white"></div>
          <p className="place">¿Quienes sómos?</p>
          <img src={weImage} alt="Nosotros" id="weImage"/>
        </div>
        <div className="aboutContainer">
          <p className="fullPlace">Notaria Pública #2 del Distrito Judicial de Tula
          de Allende, Hidalgo, y del Patrimonio Inmobiliario Federal</p>
          <div className="descContainer">
            <div>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src={logo} alt="Notaria logo"/>
          </div>
        </div>
        <div className="weHaveServices">
          <h1>Contamos con:</h1>
          <div className="serviceItem">
            <img src={paper} alt="papel"/>
            <p>Una variedad de trámites para todo tipo de circunstancias legales</p>
          </div>
          <div className="serviceItem">
            <img src={documentsSecurity} alt="folder de segudidad"/>
            <p>Ten por seguro que la información almacenda en tus expedientes tiene caracter de confidencial</p>
          </div>
          <div className="serviceItem">
            <img src={communication} alt="comunicacion"/>
            <p>Colaboradores con años de experiencia y con la mejor disposición de atenderte</p>
          </div>
        </div>
        <div id="weAre">
          <div className="persons">
            <div className="serviceItem">
              <img src={avatar} alt="avatar"/>
              <span>Lic. Marcela Vieyra Alamilla</span>
              <span>Notario Titular</span>
            </div>
            <div className="serviceItem">
              <img src={avatar} alt="avatar"/>
              <span>Lic. César Vieyra Salgado</span>
              <span>Notario Adscrito</span>
            </div>
          </div>
          <hr id="infoHR"/>
          <div className="weAreDesc">
            <p>Somos mienbros del <span>Colegio de Notarios del Estado de Hidalgo </span>
             y del <span>Colegio Nacional del Notariado Mexicano</span></p>
             <img src={colegioNotarios} alt="Colegio de Notarios Logo"/>
             <img src={notariadoMexicano} alt="Notariado Mexicano Logo"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Info
