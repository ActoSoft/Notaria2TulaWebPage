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
        actualImage: null, 
        classChange: false
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
    let image=document.getElementById("imgC")
    let { cont } = this.state
    let { classChange } = this.state
    cont++
    if(cont > 2) cont = 0
    //console.log(cont%2)
    classChange===false ? image.className="oneImage" : image.className="otherImage"
    classChange=!classChange
    this.setState({cont, actualImage: this.state.urls[cont], classChange});
  }

  goKnowUs = () => {
    let top = document.getElementById('abCont').offsetTop
    //console.log(top)
    let scrollStep = 10
    let counter = window.scrollY
    let positionI= window.scrollY
    let scrollInterval = setInterval(
      ()=>{
        if(counter<=top){
          //console.log(counter)
          window.scrollBy(0, scrollStep)
          counter+=scrollStep
          //console.log(counter)
          if(counter===top-((top-positionI)%10)){
            scrollStep=(top-positionI)%10
            if(scrollStep<=0){
              scrollStep=1
            }
          }
        }
        else{
          clearInterval(scrollInterval)
        }
        }, 1
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
