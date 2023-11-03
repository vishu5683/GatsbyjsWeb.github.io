import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import "./email.css"
import Arrow1 from './assets/arrow.png'

const email = () => {
  return (
    <>
         <section className="ftco-gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 heading-section text-center text-white mb-4 ftco-animate">
                            <h2 className="py-4">Subscribe to our new emails.</h2>
                            <p>Be the first one to know about product launches & offers.</p>
                            <form>
                                <div className="email-input-container">
                                    <input type="email" name="email" placeholder="Email" className="form-control email-input" />
                                    <img src={Arrow1} className="email-arrow-icon" alt="Arrow Icon" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default email
