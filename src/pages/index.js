import * as React from "react";
import Navbar from "../components/Header/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css";
import Tv from "../components/Section-5/Tv";
import Email from "../components/Section6-email/email";
import Footer from "../components/section7-footer/assets/Footer";
import Test from "../components/Section-review/Test";
import Hero from "../components/section-1-hero/Hero";
import Layout from "../components/Section-2/Layout";
import Slider from "../components/Section3/Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Layout/>
      <Slider/>

      <div className="testimonial_wrap text-center">
        <h5>Customer Testimonial</h5>
        <div className="testimonial_box"></div>
        <div className="row">
          <div class="col-md-4 col-12 margbt">
            <Test />
          </div>
          <div class="col-md-4 col-12 margbt">
            <Test />
          </div>
          <div class="col-md-4 col-12 margbt">
            <Test />
          </div>
        </div>
      </div>
      <Tv />
      <Email />
      <Footer />
    </>
  );
}
