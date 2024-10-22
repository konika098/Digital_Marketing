import React from 'react';
import './Seo.css'; // Assuming you'll place your CSS in this file

const Seo = () => {
    return (
        <div className="seo-section">
            <div className="container">
                <div className="section-area">
                    <div className="row align-items-center seo-res">
                        <div className="col-md-12 col-lg-6 col-xl-6">
                            <span className="fs-18 seo-sub">How we are built different</span>
                            <h3 className="fs-52-c seo-title">Trustworthy SEO Agency for 
                                Sustainable Online Growth
                            </h3>
                            <p className="fs-18 about-text">
                                Digital marketing refers to the practice of promoting products or services
                                using digital technologies, primarily on the internet. This can include a range of techniques, such as social media marketing, 
                                search engine optimization (SEO), email marketing, pay-per-click advertising, and content marketing.
                            </p>
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-6">
                                    <div className="seo-card mb-4"
                                        data-aos="fade-right"
                                        data-aos-offset="200"
                                        data-aos-delay="50"
                                        data-aos-duration="1200"
                                        data-aos-easing="ease-in-out"
                                        data-aos-once="false"
                                    >
                                        <div className="icon">
                                            <img className="img-fluid" src="./assets/images/seo-img-1.png" alt="Simple Solution" />
                                        </div>
                                        <div className="content">
                                            <p className="fs-24-c">Simple Solution</p>
                                            <p className="fs-18-s">sum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div className="seo-card"
                                        data-aos="fade-right"
                                        data-aos-offset="200"
                                        data-aos-delay="50"
                                        data-aos-duration="1400"
                                        data-aos-easing="ease-in-out"
                                        data-aos-once="false"
                                    >
                                        <div className="icon">
                                            <img className="img-fluid" src="./assets/images/seo-img-2.png" alt="Management" />
                                        </div>
                                        <div className="content">
                                            <p className="fs-24-c">Management</p>
                                            <p className="fs-18-s">sum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="seo-card mb-4"
                                        data-aos="fade-left"
                                        data-aos-offset="200"
                                        data-aos-delay="50"
                                        data-aos-duration="1200"
                                        data-aos-easing="ease-in-out"
                                        data-aos-once="false"
                                    >
                                        <div className="icon">
                                            <img className="img-fluid" src="./assets/images/seo-img-3.png" alt="Client Oriented" />
                                        </div>
                                        <div className="content">
                                            <p className="fs-24-c">Client Oriented</p>
                                            <p className="fs-18-s">sum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div className="seo-card"
                                        data-aos="fade-left"
                                        data-aos-offset="200"
                                        data-aos-delay="50"
                                        data-aos-duration="1400"
                                        data-aos-easing="ease-in-out"
                                        data-aos-once="false"
                                    >
                                        <div className="icon">
                                            <img className="img-fluid" src="./assets/images/seo-img-4.png" alt="SEO Optimization" />
                                        </div>
                                        <div className="content">
                                            <p className="fs-24-c">SEO Optimization</p>
                                            <p className="fs-18-s">sum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-xl-block col-xl-1"></div>
                        <div className="col-md-12 col-lg-6 col-xl-5">
                            <div className="about-img all-img-scale">
                                <img className="img-fluid" src="./assets/images/seo-bg.png" alt="SEO Background" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seo;
