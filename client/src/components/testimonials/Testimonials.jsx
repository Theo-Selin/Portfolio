import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/me.png";
import AVATAR2 from "../../assets/me.png";
import AVATAR3 from "../../assets/me.png";
import AVATAR4 from "../../assets/me.png";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVATAR1,
    name: "Oskar Syverstad",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, maxime et. Fugiat praesentium harum explicabo ducimus commodi, ipsa quam. Deleniti blanditiis vel expedita debitis culpa. Esse id assumenda culpa sapiente." 
  },
  {
    id: 2,
    avatar: AVATAR2,
    name: "Oskar Syverstad",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, maxime et. Fugiat praesentium harum explicabo ducimus commodi, ipsa quam. Deleniti blanditiis vel expedita debitis culpa. Esse id assumenda culpa sapiente." 
  },
  {
    id: 3,
    avatar: AVATAR3,
    name: "Oskar Syverstad",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, maxime et. Fugiat praesentium harum explicabo ducimus commodi, ipsa quam. Deleniti blanditiis vel expedita debitis culpa. Esse id assumenda culpa sapiente." 
  },
  {
    id: 4,
    avatar: AVATAR4,
    name: "Oskar Syverstad",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, maxime et. Fugiat praesentium harum explicabo ducimus commodi, ipsa quam. Deleniti blanditiis vel expedita debitis culpa. Esse id assumenda culpa sapiente." 
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            modules={[ Pagination ]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review, id}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
