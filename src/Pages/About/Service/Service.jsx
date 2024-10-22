import React from 'react';
import './Service.css'; // Assuming you'll place your CSS in this file

const Service = () => {
    return (
        <section className="service-section">
            <div className="container">
                <div className="service-area">
                    <div className="top-content">
                        <h2 className="fs-52-c res-425" 
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false">
                            What clients value most <br className="d-none d-xl-block" /> about us
                        </h2>
                        <p className="fs-18-s seo-text" 
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false">
                            Find a team of digital marketers you can rely on. Every day, we <br className="d-none d-md-block" />
                            build trust through communication, transparency, and results.
                        </p>
                    </div>

                    {/* Card Section */}
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="new_card card-res"
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-out"
                                data-aos-once="false">
                                <div className="new-card-img-top">
                                    <img className="img-fluid first" src="./assets/images/card-icon-1-ho.png" alt="Transparency" />
                                    <img className="img-fluid second" src="./assets/images/card-icon-1.png" alt="Transparency" />
                                </div>
                                <h5 className="card-title">Transparency</h5>
                                <p className="fs-18-s">Cras eu semper neque, sit amet aliquet odio. Donec volutpat enim quis mollis consequat.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="new_card card-res"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1400"
                                data-aos-easing="ease-in-out"
                                data-aos-once="false">
                                <div className="new-card-img-top">
                                    <img className="img-fluid first" src="./assets/images/card-icon-2-ho.png" alt="Experienced" />
                                    <img className="img-fluid second" src="./assets/images/card-icon-2.png" alt="Experienced" />
                                </div>
                                <h5 className="card-title">Experienced</h5>
                                <p className="fs-18-s">Cras eu semper neque, sit amet aliquet odio. Donec volutpat enim quis mollis consequat.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="new_card card-res"
                                data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-out"
                                data-aos-once="false">
                                <div className="new-card-img-top">
                                    <img className="img-fluid first" src="./assets/images/card-icon-3-ho.png" alt="Result Guarantee" />
                                    <img className="img-fluid second" src="./assets/images/card-icon-3.png" alt="Result Guarantee" />
                                </div>
                                <h5 className="card-title">Result Guarantee</h5>
                                <p className="fs-18-s">Cras eu semper neque, sit amet aliquet odio. Donec volutpat enim quis mollis consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
