import about from '../../../../public/assets/about-img-1.png';
import about2 from '../../../../public/assets/about-img-2.png';
import './Trust.css'; 

const Trust = () => {
    return (
        <div className="trust-section">
            <div className="container">
                <div className="trust-area">
                    <div className="row mb-2 mb-lg-5">
                        <div className="col-md-6 col-xl-4">
                            <p className="fs-52-w">Founded on trust. Focused on relationships.</p>
                        </div>
                        <div className="d-none d-xl-block col-xl-3"></div>
                        <div className="col-md-6 col-xl-5">
                            <p 
                                style={{ color: '#D0D0D0', paddingBottom: '33px' }} 
                                className="fs-18 trust-text"
                            >
                                {`Find a team of digital marketers you can rely on.
                                Every day, we build trust through communication, transparency, and results. In order to make sure your website is
                                user-friendly and optimized for Google's algorithm, our on-site optimization experts clean up the code and copy.`}
                            </p>
                            <div className="trust-btn">
                                <a href="./contact.html">
                                    <button className="btn btn-success purple" type="button">Contact Us</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="trust-img">
                                <img 
                                    className="img-fluid" 
                                    src={about} 
                                    alt="Trust Image 1"
                                    data-aos="fade-right"
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-once="false"
                                />
                                <p 
                                    className="fs-18 about-text" 
                                    data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="1300"
                                    data-aos-easing="ease-in-out"
                                    data-aos-once="false"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="trust-img">
                                <img 
                                    className="img-fluid" 
                                    src={about2}
                                    alt="Trust Image 2"
                                    data-aos="fade-left"
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-once="false"
                                />
                                <p 
                                    className="fs-18 about-text" 
                                    data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="1300"
                                    data-aos-easing="ease-in-out"
                                    data-aos-once="false"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trust;
