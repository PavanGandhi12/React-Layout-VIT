import React, { useState } from 'react'
import testimonialimg from '../images/Headshot.png';
const Testimonials = () => {

  const quotesData = [
    {
      name: "Floyd Miles",
      role: "CEO OF Yellow",
      content:
        "I can't say enough about Tech Vision IT SOlution. Their products are top-notch, and their customer service is exceptional. From the moment I reached out with a question, they were there to help me every step of the way. I highly recommend",
    },
    {
      name: "Stefen Salvator",
      role: "CEO OF Yellow",
      content:
      "I've been a loyal customer of Tech Vision IT SOlution for years, and they never cease to amaze me. Their team is dedicated to excellence, and it shows in their work. If you're searching for a company you can trust, look no further than [Your Company Name].",
    },
    {
      name: "Caroline",
      role: "CEO OF Yellow",
      content:
      "I was hesitant to try Tech Vision IT SOlution at first, but I'm so glad I did. Their products exceeded my expectations, and I've never been happier with a purchase. The value they provide is unmatched, and I can't imagine going anywhere else.",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = quotesData.length;

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="testimonials" id='testimonial-id'>
    <div className="container">
    <h1 className='primary-heading text-center mb-5'>Testimonials</h1>
      <div id="quotesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="d-flex justify-content-center align-items-center">
          <div className="img-div">
            <img src={testimonialimg} alt="icon" />
            <div className="name-div">
              <h3 className='secondary-heading'>{quotesData[activeSlide].name}</h3>
              <p style={{ textAlign: "center" }}>
                {quotesData[activeSlide].role}
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-inner">
          {quotesData.map((quote, index) => (
            <div key={index} className={`carousel-item ${activeSlide === index ? "active" : ""}`}>
              <div className=" col-lg-12 d-flex justify-content-center align-items-center icons-wrap">
                <div>
                  <p className="quotes-content">{quote.content}</p>
                  <div className="dot-indicators">
                    {quotesData.map((_, i) => (
                      <span key={i} className={`dot ${activeSlide === i ? "active" : ""}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            className="carousel-control-prev"
            style={{ width: "3%", color: "black" }}
            type="button"
            data-bs-target="#quotesCarousel"
            data-bs-slide="prev"
            onClick={prevSlide}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden" style={{color:'black'}}>Previous</span>
          </button>
        </div>
        <button
          className="carousel-control-next"
          style={{ width: "3%" }}
          type="button"
          data-bs-target="#quotesCarousel"
          data-bs-slide="next"
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Testimonials