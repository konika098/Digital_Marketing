import React from 'react';
import './Choose.css'; // Make sure to include your CSS file

const Choose = () => {
  return (
    <div className="choose-section">
      <div className="container">
        <div className="choose-area choose-aside">
          <div className="row">
            <div className="col-lg-6">
              <span className="fs-18 choose-sub">A strategy driven Marketing Agency</span>
              <h3 className="fs-52-c" style={{ marginTop: '24px' }}>
                Transform Your Digital Presence with Our Agency
              </h3>
              <p className="fs-18 integrate-text">
                Digital marketing refers to the practice of promoting products or services using digital
                technologies, primarily on the internet. This can include a range of techniques, such as
                social media marketing, search engine optimization (SEO), email marketing, pay-per-click
                advertising, and content marketing.
              </p>

              <div className="choose-child">
                <img className="img-fluid" src="./assets/images/tick.png" alt="Tick Icon" />
                <p className="fs-22-c res-375">At vero eos et accusamu areg ghae</p>
              </div>
              <div className="choose-child">
                <img className="img-fluid" src="./assets/images/tick.png" alt="Tick Icon" />
                <p className="fs-22-c res-375">qui blanditiis praesentium volupta</p>
              </div>
              <div className="choose-child">
                <img className="img-fluid" src="./assets/images/tick.png" alt="Tick Icon" />
                <p className="fs-22-c res-375">qui blanditiis praesentium volupta</p>
              </div>

              <a href="#" className="btn btn-success dark dark-3">Discover More</a>
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-5">
              <div className="choose-img">
                <img className="img-fluid" src="./assets/images/agency-bg.png" alt="Agency Background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
