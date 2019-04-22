/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import privacity from '../../../static/AvisoPrivacidad.pdf'
import './footer.scss'

const Footer = (props) => (
    <div>
    <div id="footer">
      <span>Powered By: <a href="https://www.facebook.com/ActosoftCommunity/" target="_blank">Actosoft</a></span>
      <span id="privacityAdvice"><a href={privacity} target="_blank">Aviso de privacidad</a></span>
      <span>Todos los derechos reservados 2019</span>
    </div>
    <div id="footer-mobile">
      <span id="privacityAdvice"><a href={privacity}>Aviso de privacidad</a></span>
      <span>Powered By: <a href="https://www.facebook.com/ActosoftCommunity/">Actosoft</a> 2019</span>
    </div>
    </div>
)

export default Footer
