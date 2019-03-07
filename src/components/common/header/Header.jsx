import React,{Component} from 'react'
import './header.scss'
import {NavLink} from 'react-router-dom'

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      images: [
        <img
          src="https://i.pinimg.com/originals/33/8a/55/338a55304e6dc72ef9258968ce045e8d.jpg"
          className="imgC"
        />,
        <img
          src="https://i.pinimg.com/originals/64/b9/63/64b9634b39a79d231b844e4e6d84d48c.jpg"
          className="imgC"
        />,
        <img
          src="http://4.bp.blogspot.com/-mJd3yzNM0VQ/Uq9Vf0VJ6UI/AAAAAAAASio/KGtrBYfwmBY/s1600/imagenes-paisaje-5.jpg"
          className="imgC"
        />
      ],
      cont: 0,
      interval: null
    };
  }

  componentDidMount(){
    let { interval } = this.state;
    interval = window.setInterval(this.change, 5000);
    this.setState({ interval });
  }

  change = () =>{
    let { cont } = this.state;
    cont = cont + 1;
    cont >= 3 ? (cont = 0) : cont=cont;
    cont < 0 ? (cont = 2) : cont=cont;
    this.setState({ cont });
  }

  render(){
    return(
      <div id="head">
        {this.state.images[this.state.cont]}
        <div id="black"></div>
        <ul id="navbar">
          <NavLink to="/" className="link">
            <li className="itemNav">Home</li>
          </NavLink>
          <NavLink to="/nosotros/" className="link">
            <li className="itemNav">Información</li>
          </NavLink>
          <NavLink to="/tramites/" className="link">
            <li className="itemNav">Servicios</li>
          </NavLink>
          <NavLink to="/contacto/" className="link">
            <li className="itemNav">Contacto</li>
          </NavLink>
          <NavLink to="/tramites/:slug/" className="link">
            <li className="itemNav">Servicio</li>
          </NavLink>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default Header
