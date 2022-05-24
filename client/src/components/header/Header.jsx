import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "./assets/TheoPixel.gif"
import CAT from "./assets/SionPixel.gif"
import ME_IDLE from "./assets/idle.gif"
import CAT_IDLE from "./assets/Sionidle.gif"
import HeaderSocials from './HeaderSocials'
import {FaEnvelope} from "react-icons/fa"
import Loop from '../loop/Loop'

const Header = () => {
  return (
    <header>
      <Loop />
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Theo Selin</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <img className="cat" src={CAT} alt="cat" />
        <img className="me" src={ME} alt="me" />
        <img className="meIdle" src={ME_IDLE} alt="meIdle" />
        <img className="catIdle" src={CAT_IDLE} alt="catIdle" />


        <a href="#contact" className="message"><FaEnvelope/></a>

      </div>
    </header>
  )
}

export default Header
