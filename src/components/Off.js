import {React, useEffect} from 'react';
import off from '../images/off.jpg';

import off2 from '../images/off2.jpg';

import './Off.module.css';
import "aos/dist/aos.css";
import Aos from "aos";


 const Off =() => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
   
  return (
    <>
        <div  className='off'>
            <div className='container'>
                <div data-aos="fade-up" className='deals'>

                    
                    <div className='wrapper'>
                        <div style={{ backgroundColor: 'transparent', height: '625px',
                        minWidth: '400px', zIndex: '99', position: 'absolute', }} className='back'><p>50% Off On All Deals</p></div>
                        <img style={{zIndex: '-99', position: 'relative', minWidth: '400px', height: '625px'  }} src={off} alt='' />
                    </div>
                    

                  
                    <div className='wrapper'>
                        <div style={{ backgroundColor: 'transparent', height: '625px',
                        minWidth: '400px', zIndex: '99', position: 'absolute', }} className='back'><p>50% Off On All Deals</p></div>
                        <img style={{zIndex: '-99', position: 'relative', minWidth: '400px', height: '625px'  }} src={off2} alt='' />
                    </div>

                   
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default Off