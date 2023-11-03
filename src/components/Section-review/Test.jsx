import React from 'react'
import "./test.css"
import user1 from "./assets/user1.png"

const Test = () => {
    const paragraphStyle = {
        color: '#1E3164', // Font color
        fontWeight: 'bold', // Font weight
        fontSize: '17px' // Font size
    };

    const starStyle = {
        color: 'goldenrod' // Star color (golden)
    };


  return (
    <>
          <div className="text-center">
           
           <div className="d-flex justify-content-center">
               <div className="circle" style={{backgroundColor:'#ffffff', borderRadius:'10%'}}>
                   <img src={user1} alt="User 1" className="user-image" />
                  
                   <div className="stars">
                       {[...Array(5)].map((_, index) => (
                           <span key={index} className="star-icon" style={starStyle}>&#9733;</span>
                       ))}
                   </div>
                   <p className="user-name">Rajesh</p>
                   <p className="card-text">
                       Excellent product experience. Will order more for my entire house.
                   </p>
               </div>
           </div>
       </div>
    </>
  )
}

export default Test
