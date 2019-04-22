import React, { Component } from 'react'
import contact from '../../static/assets/Contact.jpg'
import avatar from '../../static/assets/Icons/user.svg'
import envelope from '../../static/assets/Icons/envelope.svg'
import smartphone from '../../static/assets/Icons/smartphone.svg'
import './contact.scss'
import firebase from 'firebase'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
          newContact: {
            nombre: '',
            telefono: '',
            email: '',
            mensaje: this.props.location.aboutProps ? this.props.location.aboutProps.message : ""
          }
        }
    }

    componentDidMount = () =>{
      this.props.location.aboutProps ? window.scrollTo(0,window.innerHeight) : window.scrollTo(0,0)
    }

    onChangeElement = (e) => {
      const { newContact } = this.state
      newContact[e.target.name] = e.target.value
      this.setState({ newContact })
    }

    validateData = () => {
      const { nombre, telefono, email, mensaje } = this.state.newContact
      console.log(nombre)
      console.log(telefono)
      console.log(email)
      console.log(mensaje)
      if(nombre === "" || telefono === "" || email === "" || email.split("@").length !== 2 || email.split("@")[1].split(".").length < 2 || mensaje === "") {
        return {
          error: true,
          message: "Algún dato no es válido, favor de verificar."
        }
      }
      else {
        return {
          error: false,
        }
      }
    }

    sendContacto = () => {
      const validate = this.validateData()
      if(!validate.error)
      {
        firebase.firestore().collection('contactos').add(this.state.newContact)
        .then((docRef)=>{
          toast.success('Gracias por tu mensaje, en breve se pondrán en contacto contigo 😎.')
          setTimeout(()=>{
            window.location.assign('/')
          }, 3000)
        })
        .catch((err)=>{
          toast.error('Algo falló al enviar el mensaje 😓. Intente de nuevo más tarde.')
        })
      }
      else {
        toast.error(validate.message)
      }
      
    }

    render() {
      const { nombre, telefono, email, mensaje } = this.state.newContact
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
                      <input 
                        type="text" 
                        name="nombre" 
                        placeholder="Nombre Completo" 
                        onChange={(e)=>this.onChangeElement(e)}
                        value={nombre}
                        required
                        />
                    </div>
                    <div className="characteristicsClient">
                      <img src={envelope} alt="emailIcon"/>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Correo Electrónico" 
                        onChange={(e)=>this.onChangeElement(e)}
                        value={email}
                        required
                      />
                    </div>
                    <div className="characteristicsClient">
                      <img src={smartphone} alt="phoneIcon"/>
                      <input 
                        type="number" 
                        name="telefono" 
                        placeholder="Teléfono de contacto" 
                        onChange={(e)=>this.onChangeElement(e)}
                        value={telefono}
                        required
                        />
                    </div>
                    <div id="contentTextArea">
                      <textarea 
                        placeholder="Cuéntanos un poco más de como podemos ayudarte" 
                        required 
                        name="mensaje"
                        onChange={(e)=>this.onChangeElement(e)}
                        defaultValue={mensaje}
                        ></textarea>
                    </div>
                  </div>
                  <button onClick={this.sendContacto}>enviar</button>
                </div>
              </div>
              <ToastContainer />
            </div>
        )
    }

}

export default Contact
