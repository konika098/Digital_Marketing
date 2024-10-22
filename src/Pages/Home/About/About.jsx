import React from 'react';
import './About.css'; // Ensure to create this CSS file or use a CSS module

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="about-area">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-img">
                <img className="img-fluid" src="./assets/images/about-img.png" alt="About Us" />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="about-aside">
                <span className="fs-18 about-sub">About Us</span>
                <h3 className="fs-52-c" style={{ marginTop: '24px' }}>
                  We Offer Professional SEO Services For 26+ Years
                </h3>
                <p className="fs-18 about-text">
                  Digital marketing refers to the practice of promoting products or services using digital technologies,
                  primarily on the internet. This can include a range of techniques, such as social media marketing,
                  search engine optimization (SEO), email marketing, pay-per-click advertising, and content marketing.
                </p>
                <div className="row">
                  <div className="col-lg-12 col-xl-6">
                    <div className="child">
                      <img className="img-fluid" src="./assets/images/tick.png" alt="Tick" />
                      <p className="fs-18-b">High End Analyzing</p>
                    </div>
                    <div className="child">
                      <img className="img-fluid" src="./assets/images/tick.png" alt="Tick" />
                      <p className="fs-18-b">Updated With Trend</p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xl-6">
                    <div className="child">
                      <img className="img-fluid" src="./assets/images/tick.png" alt="Tick" />
                      <p className="fs-18-b">Technical & Creative Expertise</p>
                    </div>
                    <div className="child">
                      <img className="img-fluid" src="./assets/images/tick.png" alt="Tick" />
                      <p className="fs-18-b">Marketing Management</p>
                    </div>
                  </div>
                </div>
                <a href="./about.html" className="btn btn-success dark">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
