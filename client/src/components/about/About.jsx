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
            <img src={ME} alt="About"></img>
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
              <small>100+ Ideas</small>
            </article>
          </div>

          <p>
            I'm an aspiring web developer who loves making static sites come to life.
            I have years of experience with design and have a knack for UI/UX from years
            of gaming and scrolling the web. I grew up in this world and can easily tell
            when something doesn't feel right. I love to create and birth new exciting experiences
            for the user. Feel free to stay for as long as you'd like!
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default About
