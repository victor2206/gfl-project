import "./Carousel.scss";
import { useEffect, useState } from "react";

export default () => {
  //global variables
  let carousel;
  let track;
  let direction;

  //const [slideTimer, setSliderTimer] = useState(0)
  const [slideTimer, setSlideTimer] = useState(true);

  useEffect(() => {
    let interval = null;
    if (slideTimer) {
      interval = setInterval(() => {
        console.log('interval')
        carousel = document.querySelector(".carousel_track-container");
        track = document.querySelector(".carousel_track");
        nextSlide();
      }, 3000);
    } else {
      carousel = document.querySelector(".carousel_track-container");
      track = document.querySelector(".carousel_track");
      clearInterval(interval);
    }
  }, [slideTimer]);

  //initialization useEffect
  useEffect(() => {
    carousel = document.querySelector(".carousel_track-container");
    track = document.querySelector(".carousel_track");
  }, []);

  //functions to move and handle slides

  //previous slide
  const prevSlide = (e) => {
    carousel = document.querySelector(".carousel_track-container");
    track = document.querySelector(".carousel_track");
    if (typeof e !== "undefined") {
      if (e.type === "click") {
        setSlideTimer(false);
        setTimeout(() => {
          setSlideTimer(true);
        }, 4000);
      }
    }
    if (direction === -1) {
      direction = 1;
      track.appendChild(track.firstElementChild);
    }
    carousel.style.justifyContent = "flex-end";
    track.style.transform = "translate(20%)";
  };

  //next slide
  const nextSlide = (e) => {
    carousel = document.querySelector(".carousel_track-container");
    track = document.querySelector(".carousel_track");
    if (typeof e !== "undefined") {
      if (e.type === "click") {
        setSlideTimer(false);
        setTimeout(() => {
          setSlideTimer(true);
          console.log('timeout')
        }, 4000);
      }
    }
    direction = -1;
    carousel.style.justifyContent = "flex-start";
    track.style.transform = "translate(-20%)";
  };

  const transitioned = () => {
    carousel = document.querySelector(".carousel_track-container");
    track = document.querySelector(".carousel_track");
    if (direction === -1) {
      track.appendChild(track.firstElementChild);
    } else if (direction === 1) {
      track.prepend(track.lastElementChild);
    }
    track.style.transition = "none";
    track.style.transform = "translate(0)";
    setTimeout(function () {
      track.style.transition = "all ease-in 0.2s";
    });
  };

  /*-------------------------------------- */
  return (
    <div className="carousel-component">
      <div className="carousel_container">
        <span className="slideup-indicator">&#708;</span>
        <button
          onClick={prevSlide}
          className="carousel_button carousel_button--left"
        >
          &#9664;
        </button>

        <div className="carousel_track-container">
          <ul onTransitionEnd={transitioned} className="carousel_track">
            <li className="carousel_slide">
              <img
                className="carousel_image"
                src="https://images5.alphacoders.com/946/thumbbig-946786.webp"
                alt="img1"
              />
            </li>
            <li className="carousel_slide">
              <img
                className="carousel_image"
                src="https://images8.alphacoders.com/924/thumbbig-924754.webp"
                alt="img2"
              />
            </li>
            <li className="carousel_slide">
              <img
                className="carousel_image"
                src="https://images.alphacoders.com/727/thumbbig-727252.webp"
                alt="img3"
              />
            </li>
            <li className="carousel_slide">
              <img
                className="carousel_image"
                src="https://images.alphacoders.com/835/thumbbig-835866.webp"
                alt="img4"
              />
            </li>
            <li className="carousel_slide">
              <img
                className="carousel_image"
                src="https://images4.alphacoders.com/890/thumbbig-890827.webp"
                alt="img5"
              />
            </li>
          </ul>
        </div>

        <button
          onClick={nextSlide}
          className="carousel_button carousel_button--right"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};
