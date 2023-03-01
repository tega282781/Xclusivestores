import React from 'react'
import human from '../images/human.jpg';
import makinde from '../images/person4.jpg';
import osas from '../images/person2.jpg';
import thomas from '../images/person5.jpg';
import "./HeroStyles.modules.css";

import {FaAngleLeft} from "react-icons/fa";
import {FaAngleRight} from "react-icons/fa";

function Comments() {
  const slideLeft = () =>{
      var inside = document.getElementById('inside')
      inside.scrollLeft = inside.scrollLeft -250
    }
    const slideRight = () =>{
      var inside = document.getElementById('inside')
      inside.scrollLeft = inside.scrollLeft +250
    }
return (
  <div>
       <div className='comments'>
      <div className='container'>
          <div id='inner'>

      <div className='arrow'><FaAngleLeft onClick={slideLeft} /></div>

          <div id='inside'>

          <div>
              <img src={human} alt='' />
              <div>
                  Whenever i wanna look fly, i visit Xclusive Stores,
                  They have all kind of clothes, with affordable 
                  prices, And they deliver on time with zero worries.
                  <hr />
                  <h5>Susan Peters</h5>
          </div>
          </div>

          <div>
              <img src={thomas} alt='' />
              <div>
                 There is nothing compared to the confidence of looking good.
                 I invest in my looks, i always want to look good And
                 i shop with Xclusive Stores.
                 <hr />
                 <h5>Thomas Patrick</h5>
          </div>
          </div>

          <div>
              <img src={osas} alt='' />
              <div>
                 Xclusive Stores gat you covered, no matter what you are looking
                 for, they have whatever you  want at affordable prices.
                 <hr />
                 <h5>Osas Uyi</h5>
          </div>
          </div>

          <div>
              <img src={makinde} alt='' />
              <div>
                  I dress and drip, people are attracted to me bacause of how cool
                  i look, visit Xclusive Stores to have confidence in the way you  look
                  <hr />
                  <h5>Ayodeji Makinde</h5>
          </div>
          </div>

       </div>
      <div className='arrow'><FaAngleRight onClick={slideRight} /></div>
      </div>
      </div>
  </div>
  
  </div>
)
}

export default Comments