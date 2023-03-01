import React, { useState } from 'react';
import "./HeroStyles.modules.css";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import card5 from "../images/card5.jpg";

function Cards() {

  return (
    <div>
 
        <div className='cards'>

            <div className='card'>
             <div className='background'>
              <p>-13%</p>
              <h6>10,000</h6>
             </div>
              <img src={card1} alt="" />
              <button>BUY</button>
             </div>
             
            
             <div className='card'>
             <div className='background'>
             <p>-10%</p>
             <h6>8,000</h6>
              </div>
              <img src={card2} alt="" />
              <button>BUY</button>
             </div>
          

             <div className='card'>
             <div className='background'>
             <p>-13%</p>
             <h6>32,000</h6>
              </div>
              <img src={card3} alt="" />
              <button>BUY</button>
             </div>
            

             <div className='card'>
             <div className='background'>
             <p>-10%</p>
             <h6>7,000</h6>
              </div>
              <img src={card4} alt="" />
              <button>BUY</button>
             </div>
             

             <div className='card'>
             <div className='background'>
             <p>-15%</p>
             <h6>38,000</h6>
              </div>
              <img src={card5} alt="" />
              <button>BUY</button>
             </div>
            
        </div>
    </div>
   
  )
}

export default Cards