import React from 'react';
import Slider from 'react-slick';
import './AbaHy.css';

const testData = [
  { title: 'Pathology', description: 'Pathology is the study of disease through the examination of tissues, organs, and bodily fluids.' },
  { title: 'Blood', description: 'Blood tests are essential for diagnosing health conditions and monitoring disease progression.' },
  { title: 'Radiology', description: 'Radiology uses imaging techniques to diagnose and monitor medical conditions.' },
  { title: 'Glucose', description: 'Glucose tests measure the level of sugar in the blood to assess diabetes and other metabolic conditions.' },
  { title: 'Urine', description: 'Urine tests help diagnose kidney disorders, infections, and other conditions affecting the urinary tract.' },
  { title: 'CT Scan', description: 'CT scans provide detailed cross-sectional images of the body to detect and diagnose various conditions.' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 3000, 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const Abhay = () => {
  return (
    <div className="carousel-wrapper">
      <h1 className="carousel-heading">Explore Our Test Categories</h1>
      <Slider {...settings}>
        {testData.map((test, index) => (
          <div className="test-card" key={index}>
            <h2>{test.title}</h2>
            <p>{test.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Abhay;
