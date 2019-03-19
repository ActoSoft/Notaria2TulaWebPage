import React from 'react'
import './footer.scss'

const Footer = (props) => (
    <div>
    <div id="footer">
      <span>Powered By: <a href="">Actosoft</a></span>
      <span id="privacityAdvice"><a href="">Aviso de privacidad</a></span>
      <span>Todos los derechos reservados 2019</span>
    </div>
    <div id="footer-mobile">
      <span id="privacityAdvice"><a href="">Aviso de privacidad</a></span>
      <span>Powered By: <a href="">Actosoft</a> 2019</span>
    </div>
    </div>
)

export default Footer
