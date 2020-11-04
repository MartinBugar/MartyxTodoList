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
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
              <Link to='/user' >
                USERS
              </Link>
        </Button>


        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >

              <Link to='/about' >
                ABOUT
              </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
