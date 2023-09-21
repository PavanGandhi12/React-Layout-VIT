import React from 'react'
import Menubar from './Menubar'
import bannerimg from "../images/pexels-jakub-zerdzicki-17828687.jpg"
import { BsArrowRightCircle } from "react-icons/bs";
import { ResponsiveComponent } from './ResponsiveComponent';

export default function Homes() {
  const screenSize = ResponsiveComponent();

  let h1FontSize = '36px';
  let paddingTopBottom = '150px';
  let lineHeight = "45px"

  if (screenSize === 'phone' || screenSize === 'tablet') {
    h1FontSize = '23px';
    paddingTopBottom = "30px";
    lineHeight = "25px"
  }

  return (
    <>
      <Menubar />
      <section className='home-banner' id='home' style={{ paddingTop: paddingTopBottom, paddingBottom: paddingTopBottom }}>
        <div className='container'>
          <div className='row g-0 banner-detail'>
            <div className='col-6 col-lg-5 text-font  content-div'>
              <p>Mobile, Web, Cloud & Analytics</p>
              <h2 className='primary-heading heading-font top-bottom-space' style={{ fontSize: h1FontSize, lineHeight: lineHeight }}>
                The next generation of technology.
              </h2>
              <p>Website and App development solution for transforming and innovating businesses.
              Trusted technology partner that can turn your business ideas into intelligent solutions. </p>
              {/* We are an ethics-driven company that believes in doing the best for your business. */}
              <a className='anchor top-bottom-space' href='#'> Get in Touch <BsArrowRightCircle /></a>
            </div>
            {/* <div className='col-lg-7 '>
              <img src={bannerimg} alt="Banner" />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
