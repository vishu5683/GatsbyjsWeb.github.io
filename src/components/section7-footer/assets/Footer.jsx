import React from 'react'
import "./footer.css"
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react';

const Footer = () => {
    const backgroundImageUrl = '/assets/footer.png';

  return (
    <>
        <footer className="ftco-footer ftco-section py-5" css={css`
        background-image: url(${backgroundImageUrl});
        background-size: cover;
        background-position: center;
        color: #ffffff;
        padding: 50px 150px;
        text-align: center;
      `}>
                <div className="container">
                    <div className="row">
                        <div className="mouse">
                            <a href="#" className="mouse-icon">
                                <div className="mouse-wheel">
                                    <span className="ion-ios-arrow-up"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row py-3 text-white footerlink">
                        <div className="col-md-4 col-sm-6">
                            <div className="ftco-footer-widget ">
                                <h4 className="ftco-heading-2">Connect with us</h4>
                                <ul className="list-unstyled">
                                    <li>blog</li>
                                    <li>contact us</li>
                                    <li>socal media</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="ftco-footer-widget ">
                                <h4 className="ftco-heading-2">Policy Links</h4>
                                <ul className="list-unstyled">
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>Manual & Guides</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="ftco-footer-widget mb-4">
                                <h4 className="ftco-heading-2">Company</h4>
                                <ul className="list-unstyled">
                                    <li>About us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    </>
  )
}

export default Footer
