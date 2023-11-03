import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <>
       <div
        id="carouselExampleSlidesOnly"
        class="carousel slide banner_wrap"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner position-relative">
          <div class="carousel-item active">
            {/* <img src={Hero1} class="d-block w-100 hero-image" alt="Hero1" /> */}
            <div class="carousel-caption d-md-block text-container">
              <h1 class="carousel-title">Play with color</h1>
              <p class="carousel-text">
                Color temperature changing lights take any place from drab to
                fab.
              </p>
              <div className="small_circle_box">
                <div className="circle_shap"></div>
                <div className="circle_shap"></div>
                <div className="circle_shap"></div>
              </div>
              <div className="try_button">
                <button type="button"> Try it out!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
