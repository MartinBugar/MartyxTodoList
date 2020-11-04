import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Example of spring boot application using React JS as a Frontend
        </p>
        <p className='footer-subscription-text'>
          Martyx 
        </p>
        
      </section>
     
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MARTYX  
            </Link>
          </div>

          <small class='website-rights'>MARTYX © 2020</small>


          <div class='social-icons'>

          <a href="https://www.linkedin.com/in/martin-bugar-511a42131/" class='social-icon-link youtube' aria-label='LinkedIn'>
            <i class='fab fa-linkedin' />
            </a>

            <a href="https://www.youtube.com/channel/UCtY-s6HY_Ux5Y0iOAgLag6w?view_as=subscriber" class='social-icon-link twitter'   aria-label='Youtube'>
             
              <i class='fab fa-youtube' />
           </a>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Footer;
