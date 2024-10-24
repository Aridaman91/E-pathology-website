  import React from 'react';
  import img from '../Image/scan.png';
  import './Home.css';
  import { Link } from 'react-router-dom';

  export const Home = () => {
    return (
      <div className='main'>
        <div className='homescreen'>
          <div className="content-left">
            <h3>WE ARE HERE FOR YOU</h3>
            <h1>WE THE BEST PATHOLOGIST</h1>
            <h5>"Precision in Every Test, Clarity in Every Result"</h5>
            <h3>WE ARE HERE FOR YOU 24/7</h3>
            <h3>BOOK</h3>
            <button className='book'><Link to={'/Newtest'}>BOOK YOUR TEST</Link></button>
          </div>
          <div className="content-right">
            <img className='scan' src={img} alt="image" />
          </div>
        </div>
      </div>
    );
  }

  export default Home;
// import React from 'react';
// import './Home.css'; // Ensure you have the necessary CSS for the layout
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Pagination, Navigation } from 'swiper';

// import img from '../Image/scan.png'; // Import your image

// const Home = () => {
//   return (
//     <div className='main'>
//       <div className='homescreen'>
//         <div className="content-left">
//           <h3>WE ARE HERE FOR YOU</h3>
//           <h1>WE THE BEST PATHOLOGIST</h1>
//           <h5>"Precision in Every Test, Clarity in Every Result"</h5>
//           <h3>WE ARE HERE FOR YOU 24/7</h3>
//           <h3>BOOK</h3>
//           <button className='book'><Link to='/Newtest'>BOOK YOUR TEST</Link></button>
//         </div>
//         <div className="content-right">
//           <Swiper
//             modules={[Pagination, Navigation]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             style={{ width: '100%', height: '400px' }} // Adjust height as needed
//           >
//             <SwiperSlide><img src={img} alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></SwiperSlide>
//             <SwiperSlide><img src={img} alt="Slide 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></SwiperSlide>
//             <SwiperSlide><img src={img} alt="Slide 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></SwiperSlide>
//             <SwiperSlide><img src={img} alt="Slide 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
