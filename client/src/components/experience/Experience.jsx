import React from "react";
import SkillBar from "react-skillbars";
import "./experience.css";
import { AiFillCheckCircle } from "react-icons/ai";
import BOOK from "../../assets/book.gif"

const frontendSkills = [
  { 
    type: "JavaScript", 
    level: 60
  },
  { 
    type: "React", 
    level: 80
  },
  { 
    type: "HTML", 
    level: 90 
  },
  { 
    type: "CSS", 
    level: 70
  },
];

const backendSkills = [
  { 
    type: "Node.js", 
    level: 40 
  },
  { 
    type: "Express", 
    level: 65
  },
  { 
    type: "MongoDB", 
    level: 50
  },
  { 
    type: "MySQL", 
    level: 45 
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>Stats Allocation</h5>
      <h2>Build</h2>
      <img src={BOOK} className="buildIcon" alt="book" />

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <SkillBar 
            skills={frontendSkills} 
            height={20} 
            animationDuration={2000}
            animationThreshold={0.5}
            animationDelay={0}
          />
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details_icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details_icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details_icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details_icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <SkillBar 
            skills={backendSkills} 
            height={20} 
            animationDuration={2000} 
            animationThreshold={0.5}
            animationDelay={0}
          />
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details_icon"/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details_icon"/>
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details_icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details_icon"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
