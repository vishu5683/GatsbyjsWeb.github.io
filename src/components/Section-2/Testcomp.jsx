import React from 'react'

const Testcomp = (props) => {
  return (
    <>
      <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
    className={`testCompContainerClass ${
      props.imgOnRight ? "imgOnRight" : "imgOnLeft"
    } ${props.iconsOnRight ? "iconsOnRight" : "iconsOnLeft"}`}
  >
    <div
      className="section-image" // section image
      style={{
        flex: 1,
          // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position:"relative",
      }}
    >
      

      <img
        className="Lights-pic"
       
        src={props.img}
        alt="Logo"
      />
      
    </div>
    

   

    <div
      className="section-text" // section text class
      style={{
        flex: 1,
        //   backgroundColor: "green",
        padding: 20,
      }}
    >
      <h1 className="text-size">{props.heading}</h1>
      <p className="para-size">{props.text}</p>
      <button className="button">{props.button}</button>
    </div>
  </div>
    </>
  )
}

export default Testcomp
