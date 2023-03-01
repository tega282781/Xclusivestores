import React from 'react';
import "./HeroStyles.modules.css";
import ReactCompareImage from 'react-compare-image';
import before from '../images/shirtf1.jpg';
import after from '../images/jacket5.png';

function Hero() {
   
    return (
        <>
        <div className='hero-section'>
            <div className='container'>

                <div className='hero'>

                    <div className='left'>
                    <div className='afar'>
                        <h6>ELEGANCE</h6>
                        <h6>DRESS GOOD</h6>
                        <h6>LOOKING GOOD IS GOOD BUSINESS</h6>
                        <hr />
                    </div>
                    
                    <div className='far'>
                            <h4>Trending <br />Collection</h4>
                            <p>We have the latest collections</p>
                        </div>
                        <hr />
                    </div>
    
                    <div className='wrapper1'>
                  
                    <ReactCompareImage leftImage={before} rightImage={after} />
                    </div>
                    

                    <div className='right'>
                            <h4>1.5m</h4>
                            <p>Monthly traffic <hr /></p>
                            
                            <h4>100K</h4>
                            <p>Happy Customers <hr /></p>
                    </div>
                </div>
        
            </div>
            </div>

   

   
        </>

      )
}

export default Hero