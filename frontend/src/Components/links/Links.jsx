import React from 'react';
import './Links.css';
import img1 from '../Image/image.png'
import img6 from '../Image/mac.jpg'
import img7 from '../Image/d.png'
import img8 from '../Image/download.png'
import img9 from '../Image/images.jpeg'
import img10 from '../Image/images.png'
export const Links= ()=>  {
  return (
    <div className='secondtime'>
      <div className='mainbox'>
        <img className='LOGO' src={img1} alt="" />
        <p className='words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, consequatur ex minus repellat beatae perspiciatis possimus.</p>
        <button className='book'>Read more</button>
      </div>
      <div className='mainbox'>
        <img className='LOGO' src={img6} alt="" />
        <p className='words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, consequatur ex minus repellat beatae perspiciatis possimus.</p>
        <button className='book'>Read more</button>
      </div>
      <div className='mainbox'>
        <img className='LOGO' src={img7} alt="" />
        <p className='words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, consequatur ex minus repellat beatae perspiciatis possimus.</p>
        <button className='book'>Read more</button>
      </div><br/>
      <div className='mainbox'>
        <img className='LOGO' src={img8} alt="" />
        <p className='words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, consequatur ex minus repellat beatae perspiciatis possimus.</p>
        <button className='book'>Read more</button>
      </div>
      <div className='mainbox'>
        <img className='LOGO' src={img9} alt="" />
        <p className='words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, consequatur ex minus repellat beatae perspiciatis possimus.</p>
        <button className='book'>Read more</button>
      </div>
      <div className='mainbox'>
        <img className='LOGO' src={img10} alt="" />
        <p className='words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, consequatur ex minus repellat beatae perspiciatis possimus.</p>
        <button className='book'>Read more</button>
      </div>
    </div>
  );
}

export default Links;
