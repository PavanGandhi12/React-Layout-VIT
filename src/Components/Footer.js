
import React from 'react';
import logoimg from "../images/logo.png"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="site-footer" id='footer-id' style={{backgroundColor:"#f7f5f2"}}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img className='logo' src={logoimg} alt="Company Logo" />
          </div>
          <div className="footer-links">
          <h3 >Company</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Testimonials</a></li>

              <li><a href="#">Contact</a></li>

            </ul>
          </div>
          <div className="footer-services">
          <h3 >Services</h3>
            <ul>
              <li><a href="#">Enterprise Software Development</a></li>
              <li><a href="#">Data Analytics</a></li>
              <li><a href="#">Cloud Computing</a></li>
              <li><a href="#">Software Development</a></li>
              <li><a href="#">UI-UX Designing</a></li>


            </ul>
          </div>
          <div className="footer-services">
          <h3 >More</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Webinar</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>

            </ul>
          </div>
          <div className="footer-contact">
          <h3 >Contact Us</h3>

          <p> E-mail :  <a href="mailto:info@example.com">info@example.com</a></p>
          <p> Phone:  <a href="tel:+1 (123) 456-7890"> +1 (123) 456-7890</a></p>
            <p> </p>
          </div>
           
        </div>
        <div className='row icons justify-content-center mt-3'>
                     <a href='#'><BsFacebook /></a>
                     <a href='#'><BsTwitter /></a>
                     <a href='#'><BsLinkedin /></a>
                     <a href='#'><BsInstagram /></a>
                 </div>
                 <hr  className='text-color' />
                 <div className='text-center text-font' >
                     <span>Copyright © 2023 (Company Name). All Rights Reserved.</span>
                 </div>
      </div>
    </footer>
  );
}

export default Footer;
