
import './Picture.css';
import img11 from '../Image/d.webp';
import img12 from '../Image/dv.png'; 
import { Link } from 'react-router-dom';

export const Picture= ()=>
   {
  return (
    <div className="back">
      <div className="st">
        <div className="overlay-content">
          <img src={img12} alt="Top Image" className="top-image" />
          <h1 className="overlay-text">
            BOOK A HOME TEST TODAY
            <br />
            <button className='booktest'><Link to={'/Newtest'}>BOOK YOUR TEST</Link></button>
            </h1>
        </div>
        <img src={img11} alt="Blurred Image" className="blurred-image" />
      </div>
    </div>
  );
}

export default Picture;





























// import React from 'react';
// import './Picture.css';
// import img11 from '../Image/d.webp';
// import img12 from '../Image/dv.png'; 

// function Picture() {
//   return (
//     <div className="back">
//       <div className="st">
//         <div className="overlay-content">
//           <img src={img12} alt="Top Image" className="top-image" />
//           <h1 className="overlay-text">
//             BOOK A HOME TEST TODAY
//             <br />
//             <button className='button'>BOOK NOW</button>
//           </h1>
//         </div>
//         <img src={img11} alt="Blurred Image" className="blurred-image" />
//       </div>
//     </div>
//   );
// }

// export default Picture;
