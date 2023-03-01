import React, { useState, useEffect } from 'react';
import "./HeroStyles.modules.css";
import {ProductsData} from '../Products.js';
import "aos/dist/aos.css";
import Aos from "aos";




  const Items = () =>{
    useEffect(() => {
      Aos.init({ duration: 2000 });
  }, [])

    const [MenuProducts, setMenuProducts] = useState(ProductsData)

    const filter = (type) => {
      setMenuProducts(ProductsData.filter((product)=>product.type === type))
    };


    
  
   
  return (
    <div>
        
        <div className='buy'>
            <div className='container'>

            <div className='products'>
            <ul data-aos="fade-up" className='menu'>
            <li onClick={()=>setMenuProducts(ProductsData)}><a className='link'>ALL</a></li>
                <li onClick={()=>filter("phone")}><a className='link'>PHONES</a></li>
                <li onClick={()=>filter("laptop")}><a className='link'>LAPTOP</a></li>
                <li onClick={()=>filter("bag")}><a className='link'>BAG</a></li>
                <li onClick={()=>filter("hat")}><a className='link'>HATS</a></li>
                <li onClick={()=>filter("shirt")}><a className='link'>SHIRTS</a></li>
                <li onClick={()=>filter("pants")}><a className='link'>PANTS</a></li>
                <li onClick={()=>filter("jacket")}><a className='link'>JACKETS</a></li>
                <li onClick={()=>filter("shoes")}><a className='link'>SHOES</a></li>
            </ul>
        
        
              
                <div data-aos="fade-up" className='list'>
                    {
                    MenuProducts.map((product, i)=>(
                        <div className='product'>
                          <div className='area'>
                        <div className='image'>
                       <img src={product.productImage} alt="" />
                        </div>

                        <div className='details'>
                        <div>{product.productName}</div>
                        <div>#{product.price}</div>
                        <div>
                        <button>Add to Cart</button>
                        </div>
                         </div>
                      </div>
                        </div>
                    )
                    )
                    }
               </div>
               </div>
        </div>
    </div>

   
    </div>

  )
}

export default Items