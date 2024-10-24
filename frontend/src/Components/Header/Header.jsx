import React, { useEffect, useRef } from 'react';
import './Header.css'; // Ensure the CSS file is correctly named
import img from '../Image/d.webp'; // Make sure this path is correct

const statistics = [
  { label: 'Total Tests Performed', value: '1,250' },
  { label: 'Patients Attended', value: '350' },
  { label: 'Average Rating', value: '4.5 / 5' }
];

const StatisticsCard = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="statistics-container">
      <h2 className="statistics-heading">Our Key Statistics</h2> {/* Heading added */}
      {statistics.map((stat, index) => (
        <div
          className="statistics-card"
          key={index}
          ref={el => cardsRef.current[index] = el}
        >
          <h3 className="statistics-label">{stat.label}</h3>
          <p className="statistics-value">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCard;
