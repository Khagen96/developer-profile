import React from 'react';

import hImage from '../Images/hero.png'
import './hero.css';



const Hero = () => {
    return (
      <div>
        <div className = 'hero_section'>
          <div className = 'hero_text'>
                <h1>The Developer Repository</h1>    
          </div>
          <div className = 'hero_img'>
                <img src= {hImage} alt="developer" className = 'dev_img' />
          </div>
        </div>
            <div className = 'second_heading'>
                  <h1>Explore developer profiles</h1>
            </div>
            <hr></hr>
      </div>
    );
}
export default Hero;