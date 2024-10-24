import React from 'react';
import './About.css'
import img14 from'../Image/Oip.jpeg'
export const About = ()=>{
  return (
    <div className='about-us'>
       <div className="leftabout">
        <h2>WELCOME</h2>
        <p>
        Welcome to e-Pathology, a cutting-edge digital platform dedicated to revolutionizing the field of pathology. Our mission is to provide healthcare professionals, researchers, and students with innovative tools and resources to enhance their understanding and practice of pathology. Through advanced technology, we offer seamless access to digital pathology slides, comprehensive case studies, and educational materials designed to support diagnostic excellence.

At e-Pathology, we are committed to improving patient outcomes by enabling accurate and efficient diagnoses. Our platform fosters collaboration and knowledge sharing among pathologists worldwide, ensuring that users stay at the forefront of advancements in the field. Whether you are a seasoned pathologist or a student beginning your journey, e-Pathology is here to support your professional growth with reliable, high-quality resources.

Join us in transforming pathology for a better tomorrow.
        </p>
       </div>
       <div className="rightabout">
        <img src={img14} alt="" />
       </div>
      
    </div>
  )
};

export default About




