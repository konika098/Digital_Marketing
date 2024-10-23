import './Testimonial.css'; 
import testimonialsData from '/public/Testimonial.json'; 


const Testimonial = () => {
    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="testimonial-area">
                    <div className="test-sub">
                        <span className="fs-18 about-sub">Testimonial</span>
                    </div>
                    <h3
                        className="fs-52-c text-center"
                        style={{ margin: '30px 0' }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                    >
                        What Our Clients Are
                        <br className="d-none d-md-block" />
                        Saying About Us
                    </h3>

                    <div className="testimonial-slider-class">
                        {testimonialsData.map((testimonial, index) => (
                            <div
                                className="tst-wrapper"
                                data-aos={testimonial.aos}
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-out"
                                data-aos-once="false"
                                key={index}
                            >
                                <img className="quote" src={testimonial.quoteImage} alt="Quote icon" />
                                <p className="fs-18-c text-center">{`"${testimonial.quote}"`}</p>
                                <div className="rating">
                                    <img className="img-fluid" src={testimonial.ratingImage} alt="Rating" />
                                </div>
                                <h4 className="client-name">{testimonial.name}</h4>
                                <p className="fs-18-c">{testimonial.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
