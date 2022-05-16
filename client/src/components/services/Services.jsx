import React from 'react'
import "./services.css"
import IMG1 from "./assets/active9.png"
import IMG2 from "./assets/active13.png"
import IMG3 from "./assets/active15.png"
import IMG4 from "./assets/passive5.png"
import IMG5 from "./assets/active11.png"
import IMG6 from "./assets/passive3.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Rhetoric",
  },
  {
    id: 2,
    image: IMG2,
    title: "Resilient",
  },
  {
    id: 3,
    image: IMG3,
    title: "Perceptive",
  },
  {
    id: 4,
    image: IMG4,
    title: "Driven",
  },
  {
    id: 5,
    image: IMG5,
    title: "Motivating",
  },
  {
    id: 6,
    image: IMG6,
    title: "Ambitious",
  },
]

const Services = () => {
  return (
    <section id="services">

      <h5>What I offer</h5>
      <h2>Social Traits</h2>

      <div className="container services__container">
        {
          data.map(({id, image, title}) => {
            return (
              <article key={id} className='trait__item'>
              <div className="trait__item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Services
