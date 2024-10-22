import React from 'react';
import './Choose.css'; // Create this CSS file or use a CSS module

const Choose = () => {
  return (
    <div className="choose-section">
      <div className="container">
        <div className="choose-area choose-aside">
          <div className="row">
            <div className="col-lg-6">
              <span className="fs-18 about-sub">Why Choose Us</span>
              <h3 className="fs-52-c" style={{ marginTop: '24px' }}>
                Reach Customers & <br className="d-none d-xl-block" />
                Prospects Across The Entire
              </h3>
              <p className="fs-18 about-text">
                Digital marketing refers to the practice of promoting products or services using digital technologies, primarily on the internet. This can include a range of techniques, such as social media marketing, search engine optimization (SEO), email marketing, pay-per-click advertising, and content marketing.
              </p>

              <div className="child" style={{ paddingBottom: '24px' }}>
                <img className="img-fluid" src="./assets/images/tick.png" alt="img" />
                <p className="fs-18-c res-375">Easily Customize Your Follow-up Campaigns</p>
              </div>
              <div className="child" style={{ paddingBottom: '32px' }}>
                <img className="img-fluid" src="./assets/images/tick.png" alt="img" />
                <p className="fs-18-c res-375">Power Your Revenue With Email & Sms Marketing</p>
              </div>

              <a href="./contact.html" className="btn btn-success dark">Contact Us</a>
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-5">
              <div className="choose-img">
                <img className="img-fluid" src="./assets/images/choose-img.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
