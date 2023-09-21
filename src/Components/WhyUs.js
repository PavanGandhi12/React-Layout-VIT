
import React, { useEffect } from 'react';
import { ResponsiveComponent } from './ResponsiveComponent'; // Import the ResponsiveComponent

export default function WhyUs() {
  const screenSize = ResponsiveComponent(); // Get the current screen size

  // Define the padding top and bottom based on screen size
  let paddingTopBottom = '50px'; // Default padding value

  if (screenSize === 'phone' || screenSize === 'tablet') {
    paddingTopBottom = '10px';
  }
  

  useEffect(() => {
    const elements = document.querySelectorAll('.number');
      
    elements.forEach(element => {
      const targetNumber = parseInt(element.getAttribute('data-digit'));
      const duration = 500; // Adjust duration as needed
      const interval = duration / targetNumber;

      let currentNumber = 0;
      const intervalId = setInterval(() => {
        if (currentNumber >= targetNumber) {
          clearInterval(intervalId);
        } else {
          currentNumber++;
          element.textContent = currentNumber;
        }
      }, interval);
    });
  }, []);

  return (
    <section className='why-us' id='why-us-id' style={{ paddingTop: paddingTopBottom, paddingBottom: paddingTopBottom }}> 
      <div className='container'>
        <div>
          <h2 className='primary-heading text-center letter-size services heading-font'>Why Us</h2>
        </div>
        <div className='row mt-4'>
          <div className='col-lg-3'>
            <div>
              <span data-digit="10+" className='letter-size  heading-font number'>0+</span>
              <p className='whyus-text text-font mt-3'>Years of developing tech solutions</p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div>
              <span data-digit="500+" className='letter-size heading-font number' >0+</span>
              <p className='whyus-text text-font mt-3'>Projects successfully executed</p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div>
              <span data-digit="300+" className='letter-size heading-font number'>0+</span>
              <p  className='whyus-text text-font mt-3'>Agile enabled talent and growing</p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div>
              <span data-digit="20+" className='letter-size heading-font number'>0+</span>
              <p className='whyus-text text-font mt-3'>Countries with happy customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
