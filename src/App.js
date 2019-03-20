import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'

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

  openSidebar = () => {
    console.log("llego")
    this.setState({sidebarActive: true})
  }

  closeSidebar = () => {
    this.setState({sidebarActive: false})
  }

  render() {
    return (
      <div>
        <Header />
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
      </div>
    );
  }
}

export default App;
