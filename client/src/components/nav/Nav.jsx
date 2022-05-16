import React from 'react'
import { useState } from "react"
import "./nav.css"
import { AiFillHome } from "react-icons/ai"
import { GiLifeBar } from "react-icons/gi"
import { FaGem, FaEnvelope, FaUserCircle } from "react-icons/fa"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><GiLifeBar/></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><FaGem/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><FaEnvelope/></a>
    </nav>
  )
}

export default Nav
