import React, { useRef, useState } from 'react'
import emailjs from "emailjs-com"
import CONFIRM from "../../assets/confirmation.gif"
import "./contact.css"
import { FaEnvelope, FaFacebookMessenger } from "react-icons/fa"

const Contact = () => {
  const form = useRef()
  const [submitted, setSubmitted] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_rwn2z7o", "template_krowg1w", form.current, "3GKtUbnYL02LpSUkt")

    e.target.reset()
    setSubmitted(true)
  }

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaEnvelope className='contact__option_icon'/>
            <h4>Email</h4>
            <h5>theo.selin@hotmail.com</h5>
            <a href="mailto:theo.selin@hotmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option_icon'/>
            <h4>Messenger</h4>
            <h5>Theo Selin</h5>
            <a href="https://m.me/theo.selin" target="_blank" rel="noreferrer">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail} className={submitted ? "hidden" : "visible"}>
          <input type="text" name="name" placeholder ="Full name" required />
          <input type="email" name="email" placeholder ="Email" required />
          <textarea name="message" placeholder="Message" rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Send</button>
        </form>
        <div className={submitted ? "confirmation__card visible" : "confirmation__card hidden"}>
          <h2>Message sent</h2>
          <img src={CONFIRM} alt="About Image"></img>
        </div>
      </div>
    </section>
  )
}

export default Contact
