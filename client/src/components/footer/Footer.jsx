import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <p className="footer__logo">THEO SELIN</p>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Social traits</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/theo-selin/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/Theo-Selin" target="_blank" rel="noreferrer"><BsGithub/></a>
      <a href="https://www.instagram.com/theoselin/" target="_blank" rel="noreferrer"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Theo Selin. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
