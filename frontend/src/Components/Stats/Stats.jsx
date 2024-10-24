import React from 'react';
import './Stats.css';

const Stats = [
  { label: 'Total Tests Performed', value: '1,250' },
  { label: 'Patients Attended', value: '350' },
  { label: 'Average Rating', value: '4.5 / 5' }
];

const StatisticsCard = () => {
  return (
    <div className="statistics-container">
      {statistics.map((stat, index) => (
        <div className="statistics-card" key={index}>
          <h3 className="statistics-label">{stat.label}</h3>
          <p className="statistics-value">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
