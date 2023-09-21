import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../images/webDevelopment.svg";
import img2 from "../images/appDevelopment.svg";
import img4 from "../images/chatbots.svg";
import img5 from "../images/ecommerce.svg";
import img6 from "../images/devOps.svg";

const WhatWeDo = () => {
  const serviceData = [
    {
      img: img1,
      title: "Web Development",
      description: "Our Web Development and progressive web app services help businesses automate operations and increase project scalability."
    },
    {
      img: img2,
      title: "Mobile Application Development",
      description: "We develop Mobile Application solutions for iOS and Android and react native to bring your business ideas to real life. We transform your ideas into reality."
    },
    {
      img: img4,
      title: "AI Development",
      description: "Our strength lies in developing AI and ML- powered chatbots using Tensor Flow that can handle FAQ support & complex app navigation"
    },
    {
      img: img5,
      title: "E-Commerce, IOT, Point-of-Sale",
      description: "We specialize in developing software for e-commerce, Internet of Things, and point-of-sale systems for businesses and industries."
    },
    {
      img: img6,
      title: "DevOps",
      description: "We offer expert infrastructure architecture and DevOps services on popular cloud platforms such as AWS and Google Cloud"
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    autoLoop: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768, // Adjust this for tablet screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576, // Adjust this for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className='whatWeDo' id='what-we-do-id'>
      <div className='container'>
        <h1 className='primary-heading text-center'>What We Do</h1>
        <Slider {...settings}>
          {serviceData.map((service, index) => (
            <div className='col-lg-4' key={index} >
              <div className='card p-4 m-4 card-fixed-height' >
                <img src={service.img} className='card-img-top img-fluid' alt='Service' style={{ width: '54%' }} />
                <div className='card-body'>
                  <h5 className='card-title'>{service.title}</h5>
                  <p className='card-text'>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>

  )
}

export default WhatWeDo