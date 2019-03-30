import React, { Component } from 'react'
import contact from '../../static/assets/Contact.jpg'
import avatar from '../../static/assets/Icons/user.svg'
import envelope from '../../static/assets/Icons/envelope.svg'
import smartphone from '../../static/assets/Icons/smartphone.svg'
import './contact.scss'

class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
              <div id="contactPresentation">
                <div className="white"></div>
                <p className="place">contacto</p>
                <img src={contact} alt="Contacto" id="contactImage"/>
              </div>
              <div className="formPart">
                <div id="whiteShadow" className="box"></div>
                <div id="blueBox" className="box">
                  <p>Déjanos un comentario, nuestro personal se pondrá en contacto contigo para darle seguimiento a tu caso.</p>
                  <div className="formContent">
                    <div className="characteristicsClient">
                      <img src={avatar} alt="avatarIcon"/>
                      <input type="text" placeholder="Nombre Completo"/>
                    </div>
                    <div className="characteristicsClient">
                      <img src={envelope} alt="emailIcon"/>
                      <input type="text" placeholder="Correo Electrónico"/>
                    </div>
                    <div className="characteristicsClient">
                      <img src={smartphone} alt="phoneIcon"/>
                      <input type="text" placeholder="Teléfono de contacto"/>
                    </div>
                    <div id="contentTextArea">
                      <textarea placeholder="Cuéntanos un poco más de como podemos ayudarte" required ></textarea>
                    </div>
                  </div>
                  <button>enviar</button>
                </div>
              </div>
            </div>
        )
    }

}

export default Contact
