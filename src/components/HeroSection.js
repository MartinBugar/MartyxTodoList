import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>TodoList Example</h1>
      <p>Spring boot + ReactJs + MySql</p>
      <div className='hero-btns'>
      <Link to='/user' > 
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >          
                USERS 
               
        </Button>

        
        </Link>

        <Link to='/about' >
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >

                ABOUT            
        </Button>
        </Link>


      </div>
    </div>
  );
}

export default HeroSection;
