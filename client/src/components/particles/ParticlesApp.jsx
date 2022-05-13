import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./particles.css"

const ParticlesApp = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        fpsLimit: 144,

        "particles": {
          "number": {
            "value": 10,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#dff754"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": true
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2.4362316369040355,
              "size_min": 1.6241544246026904,
              "sync": true
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 64.13648243462092,
            "color": "#4db5ff",
            "opacity": 0.12025590456491421,
            "width": 0.9620472365193136
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "left",
            "random": true,
            "straight": false,
            "out_mode": "destroy",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 160.3412060865523,
              "rotateY": 240.5118091298284
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble",
            },
            "onclick": {
              "enable": true,
              "mode": "push",
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 100,
              "size": 3,
              "duration": .8,
              "opacity": .9,
              "speed": .2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }}
    />
  );
};

export default ParticlesApp
