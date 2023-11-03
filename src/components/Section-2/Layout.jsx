import React from 'react'
import TestComp from './Testcomp'; // Import the TestComp component
import IMG1 from './assets/pic1.png';
import IMG2 from './assets/pic2.png';
import IMG3 from './assets/pic33.png';
import './Layout.css';

const Layout = () => {
  return (
    <>
       <div>
      <TestComp
        imgOnRight
        img={IMG1}
        heading="Sternet Smart Wi-Fi RGB Led Strip Light"
        text="Sternet Smart LED light strips are packed with rich colors and fantastic light effects."
        button="Learn more"
      />
      <TestComp
        img={IMG2}
        heading="Sternet Smart Wi-Fi 20W CCT Batten"
        text="Sternet Smart Wi-Fi LED Batten with tunable temperature range from warm to cool white."
        button="Learn more"
      />
      <TestComp
        imgOnRight
        img={IMG3}
        heading="Sternet Smart Wi-Fi CCT Led Downlight"
        text="Sternet Smart Wi-Fi Led Downlight are packed with rich colors and fantastic light effects."
        button="Learn more"
      />
    </div>
    </>
  )
}

export default Layout
