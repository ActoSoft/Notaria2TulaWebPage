import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import BottomButon from './components/common/bottomButton/BottomButton'

import HomePage from './components/homepage/HomePage'
import HeaderMobile from './components/common/header/HeaderMobile'
import Info from './components/info/Info'
import Services from './components/services/list/Services'
import Contact from './components/contact/Contact'
import Service from './components/services/detail/Service'

import NotFound from './components/common/not_found/NotFound'
class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      sidebarActive: false
    }
  }

  fixedButon = () =>{
    let component = document.getElementById("fixedButon")
    let scroll = window.scrollY

    if(scroll>=10){
      component.className="seeFixedButon"
      component.style.display="block"
    }else{
      component.className="notSeeFixedButton"
      setTimeout(()=>{
        component.style.display="none"
      }, 300)
    }
  }

  componentDidMount = () =>{
    window.addEventListener("scroll", this.fixedButon)
  }
  componentWillUnmount = ()=>{
    window.removeEventListener("scroll", this.fixedButon)
  }

  openSidebar = () => {
    console.log("llego")
    this.setState({sidebarActive: true})
  }

  closeSidebar = () => {
    this.setState({sidebarActive: false})
  }

  up = () =>{
    //window.scrollTo(0,0)
    let top = 0
    let scrollStep = 15
    let counter = window.scrollY
    let positionI= window.scrollY
    let scrollInterval = setInterval(()=>{
      if(counter>top){
        //console.log(counter)
        window.scrollBy(0, -scrollStep)
        counter-=scrollStep
        //console.log(counter)
        if(counter===top+(positionI%15)){
          scrollStep=positionI%15
          if(scrollStep<=0){
            scrollStep=1
          }
        }
      }
      else{
        clearInterval(scrollInterval)
      }
    }, 1)
  }

  render() {
    return (
      <div>
        <Header />
        <div id="anError"></div>
        <HeaderMobile 
          sidebar={this.state.sidebarActive}
          openSidebar={this.openSidebar}
          closeSidebar={this.closeSidebar}
          />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/nosotros/" component={Info} />
          <Route exact path="/tramites/" component={Services} />
          <Route exact path="/contacto/" component={Contact} />
          <Route exact path="/tramites/:slug/" component={Service} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
        <BottomButon
          up={this.up}
        />
      </div>
    );
  }
}

export default App;
