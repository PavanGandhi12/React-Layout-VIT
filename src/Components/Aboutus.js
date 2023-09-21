import React from 'react';
import Aboutimg from '../images/pexels-photo-4872045.jpeg';
import { ResponsiveComponent } from './ResponsiveComponent'; // Import the ResponsiveComponent

export default function Aboutus() {
  const screenSize = ResponsiveComponent(); // Get the current screen size

  // Define the padding top and bottom based on screen size
  let paddingTopBottom = '50px'; // Default padding value

  if (screenSize === 'phone' || screenSize === 'tablet') {
    paddingTopBottom = '37px';
  }

  return (
    <>
      <section className='about-us' id='aboutUs' style={{ paddingTop: paddingTopBottom, paddingBottom: paddingTopBottom }}>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-4 text-font'>
              <span>WE ARE CREATIVE AGENCY</span>
              <h2 className='primary-heading letter-size heading-font top-bottom-space'>Top-rated Web And Mobile App Development Company</h2>
              <p className='top-bottom-space'>A software development company that bolsters you in your particular software development necessities. An accomplice that comprehends your product development prerequisites and that will help make your thoughts a reality through point by point perusing, reasonable software development methods and ongoing maintenance as well as support.</p>
              <a className='anchor top-bottom-space'  href='#' >Read More ...</a>
            </div>
            <div className='col-lg-7'>
              <img className='about-us-img' src={Aboutimg} alt="About Us" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
