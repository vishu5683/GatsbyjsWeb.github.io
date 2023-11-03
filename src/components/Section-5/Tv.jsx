import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./tv.css"

const Tv = () => {
  return (
    <>
       <div className="goods_wrap">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div
                className=" text-center tv-section"
              >
                <div className="col-lg-12">
                  <h1 >
                    Good Reads
                  </h1>
                </div>
                <div className="sec_wrap">
                  <div className="row tv-section-inner">
                    <div className="col-lg-6 col-md-12">
                      <div className="leftcontent">
                        <h2>
                          Importance of Circadian Rhythm
                        </h2>
                        <div className="read_btn">
                          <button
                            type="button"
                            className="btn btn-primary mb-2 mt-4"
                          >
                            READ
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary mb-2 mt-4"
                          >
                            ALL BLOGS
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-center">
                      <StaticImage 
                        src="./assets/tv.png"
                        className="img-fluid"
                        style={{ marginLeft: "20px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true">
              
            </span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true">

            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Tv
