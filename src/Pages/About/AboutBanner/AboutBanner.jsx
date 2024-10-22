import React from 'react';
import './AboutBanner.css'; // Assuming you will place your CSS in this file

const AboutBanner = () => {
    return (
        <div className="about-page-section">
            <div className="container">
                <div className="about-page-area">
                    <span className="fs-18 about-sub">About Us</span>
                    <h3 
                        className="fs-52-c" 
                        style={{ marginTop: '24px' }} 
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                    >
                        We do great things together
                    </h3>
                    <p 
                        className="fs-18 about-text" 
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1400"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                    >
                        Find a team of digital marketers you can rely on. We build trust through
                        <br className="d-none d--block" />
                        communication, transparency, and results.
                    </p>

                    <div className="all-img-scale">
                        <img className="img-fluid" src="./assets/images/about-bg.png" alt="About Us Background" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;
