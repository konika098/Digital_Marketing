import React from 'react';
import './Counting.css'; 
const Counting = () => {
  return (
    <div className="counting-section">
      <div className="container">
        <div className="counting-parent row g-4 text-center">
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">4.8K</h2>
            <p className="count-text">Jobs Completed</p>
          </div>
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">15+</h2>
            <p className="count-text">Industry Experience</p>
          </div>
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">3.6K+</h2>
            <p className="count-text">Global Clients</p>
          </div>
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">130+</h2>
            <p className="count-text">Awards Won</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
