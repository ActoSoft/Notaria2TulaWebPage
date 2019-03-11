import React, { Component } from 'react'
import './homepage.scss'

class HomePage extends Component {

  constructor(props){
      super(props)
      this.state = {
        urls:[
          "https://i.pinimg.com/originals/33/8a/55/338a55304e6dc72ef9258968ce045e8d.jpg",
          "https://i.pinimg.com/originals/64/b9/63/64b9634b39a79d231b844e4e6d84d48c.jpg",
          "http://4.bp.blogspot.com/-mJd3yzNM0VQ/Uq9Vf0VJ6UI/AAAAAAAASio/KGtrBYfwmBY/s1600/imagenes-paisaje-5.jpg"
        ],
        cont: 1,
        interval: null
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
          <div id="procedureContainer">
            <span>¿Tienes algún problema legal?</span>
            <button>Trámites disponibles</button>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
