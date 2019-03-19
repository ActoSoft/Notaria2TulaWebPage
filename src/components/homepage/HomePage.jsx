import React, { Component } from 'react'
import './homepage.scss'
import back1 from '../../static/assets/back1.jpeg'
import back2 from '../../static/assets/back2.jpeg'
import back3 from '../../static/assets/back3.jpeg'
import Slider from './Slider'
import About from './About'
import Procedures from './Procedures'
import InfoAbout from './InfoAbout'

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
        <Slider 
          goKnowUs={this.goKnowUs}
        />

        <About 
          imageMobile={back2}
        />
        
        <Procedures />
        
        <InfoAbout />

      </div>
    )
  }
}

export default HomePage
