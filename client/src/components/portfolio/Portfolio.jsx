import React from 'react'
import "./portfolio.css"
import IMG1 from "./assets/Spotifan.png"
import IMG2 from "./assets/Paralifer.png"
import IMG3 from "./assets/NFT.png"
import IMG4 from "./assets/Portfolio.png"
import BOOK from "./assets/book.gif"

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
    title: "NFT",
    github: "https://github.com",
    demo: "link"
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio",
    github: "https://github.com",
    demo: "link"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>
      <img className="portfolioIcon" src={BOOK} alt="crown" />

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
            <div key={id} className='portfolio__card'>
              <div className="portfolio__card_cover">
              <img src={image} alt={title} />
              <h3>{title}</h3>
              </div>
              <h3>{title}</h3>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
