import React from "react";
import "./Counting.css"; // Import the CSS file for styling

const Counting = () => {
  return (
    <div className="counting-section service-details">
      <div className="container">
        <div className="counting-parent row g-4 text-center">
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">16M+</h2>
            <p className="count-text">Total Advertising Partners</p>
          </div>
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">93%</h2>
            <p className="count-text">Sales Increasements</p>
          </div>
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">5K</h2>
            <p className="count-text">Social Campaigns</p>
          </div>
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">12K</h2>
            <p className="count-text">Paid Marketing Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
