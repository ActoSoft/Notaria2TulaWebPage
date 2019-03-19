import React, { Component } from 'react'
import './homepage.scss'
import back1 from '../../static/img/Back1.jpg'
import back2 from '../../static/img/Back2.jpg'
import back3 from '../../static/img/Back3.jpg'
import Slider from './Slider'
import About from './About'
import Procedures from './Procedures'
import Sign from '../../static/img/Sign.jpg'
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
        cont: 0,
        interval: null,
        actualImage: null
      }
  }

  componentDidMount = () =>{
    let { interval } = this.state;
    interval = window.setInterval(this.change, 5000);
    this.setState({ interval, actualImage: this.state.urls[0] });
  }

  componentWillUnmount = () => {
    let { interval } = this.state;
    clearInterval(interval)
    this.setState({ interval });
  }

  change = () =>{
    let { cont } = this.state
    cont++
    if(cont > 2) cont = 0
    this.setState({cont, actualImage: this.state.urls[cont]});
  }

  goKnowUs = () => {
    let top = document.getElementById('abCont').offsetTop
    let scrollStep = top / (1000/30)
    let counter = window.scrollY
    let scrollInterval = setInterval(
      ()=>{
        if(counter<=top){
          window.scrollBy(0, scrollStep)
          counter+=scrollStep
        }
        else{
          clearInterval(scrollInterval)
        }
        }, 30
      )
  }

  render(){
    return(
      <div id="homeContent">
        <Slider 
          actualImage={this.state.actualImage}
          goKnowUs={this.goKnowUs}
        />

        <About 
          imageMobile={Sign}
        />
        
        <Procedures />
        
        <InfoAbout />

      </div>
    )
  }
}

export default HomePage
