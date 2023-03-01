import React from 'react';
import Comments from './Comments';
import Hero from './Hero';
import './HomepageStyles.css';
import Items from './Items'
import Off from './Off';
import Footer from './Footer.js'
import Cards from './Cards';




function Homepage() {
  return (
    <div>
         <Hero />
         <Off />
         <Cards />
         <Items />
         <Comments />
          <Footer />
    </div>
  )
}

export default Homepage