import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/me.png"
import IMG2 from "../../assets/me.png"
import IMG3 from "../../assets/me.png"
import IMG4 from "../../assets/me.png"
import IMG5 from "../../assets/me.png"
import IMG6 from "../../assets/me.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Spotifan",
    github: "https://github.com",
    demo: "link"
  },
  {
    id: 2,
    image: IMG2,
    title: "Paralifer",
    github: "https://github.com",
    demo: "link"
  },
  {
    id: 3,
    image: IMG3,
    title: "My World",
    github: "https://github.com",
    demo: "link"
  },
  {
    id: 4,
    image: IMG4,
    title: "Spotifan",
    github: "https://github.com",
    demo: "link"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item_cta'>
                <a href={github} className='btn' target="_blank">GitHub</a>
                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
              </div>
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
