import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const OurClients = () => {

    const clientImages = [
        
        require("../images/abb-logo.png"),
        require("../images/asianpaints.png"),
        require("../images/money-watch.webp"),
        require("../images/saint-gobain.png"),
        require("../images/safety-for-life-1.png"),
      ];

      const settings = {
        infinite: true,
        autoloop: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      }
  return (
    <section className='whatWeDo' id='our-clinets-id' >
    <div className='container'>
      <div className='row mt-2'>
        <h2 className='primary-heading text-center mb-5'>Clients That Have Trusted Us</h2>
        <Slider {...settings}>
          {clientImages.map((image, index) => (
            <div className='img-padding' key={index}>
              <img src={image} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </section>
  )
}

export default OurClients