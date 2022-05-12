import React from 'react'
import "./about.css"
import ME from "../../assets/me.png"
import {GiLifeBar} from "react-icons/gi"
import {FaUserGraduate, FaGem} from "react-icons/fa"

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiLifeBar className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Education</h5>
              <small>Nackademin</small>
            </article>
            <article className="about__card about__card_projects">
              <FaGem className="about__icon" />
              <h5>Projects</h5>
              <small>2+ Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Doloremque, aliquid illo accusamus ea, modi dolore similique tempore, 
            mollitia perferendis pariatur sunt ex deleniti nulla praesentium omnis distinctio. 
            Esse, maiores perferendis!
          </p>

          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
