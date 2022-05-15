import React from 'react'
import "./services.css"
import { FiCheck } from "react-icons/fi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className="service__list_icon" />
              <p>Beautiful immersive design</p>
            </li>
            <li>
              <FiCheck className="service__list_icon" />
              <p>Fun and interactive</p>
            </li>
            <li>
              <FiCheck className="service__list_icon" />
              <p>Unique experiences</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className="service__list_icon" />
              <p>Structured readable code</p>
            </li>
            <li>
              <FiCheck className="service__list_icon" />
              <p>Responsive on several platforms</p>
            </li>
            <li>
              <FiCheck className="service__list_icon" />
              <p>High performance</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Social Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className="service__list_icon" />
              <p>Positive working environment</p>
            </li>
            <li>
              <FiCheck className="service__list_icon" />
              <p>Good communication</p>
            </li>
            <li>
              <FiCheck className="service__list_icon" />
              <p>Motivating and ambitious</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
