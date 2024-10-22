import React from 'react';
import './Testimonial.css'; // Import the CSS file

const testimonials = [
    {
        quote: "High standard and excellent quality of work. They helped my business grow in digital.",
        name: "Adam Watson",
        role: "Digital Marketer",
        ratingImage: "./assets/images/rating.png",
        quoteImage: "./assets/images/quote.png",
        aos: "fade-right"
    },
    {
        quote: "Awesome work! High standard and excellent quality. They helped my business grow in digital.",
        name: "Eloise Smith",
        role: "Content Marketer",
        ratingImage: "./assets/images/rating.png",
        quoteImage: "./assets/images/quote.png",
        aos: "fade-up"
    },
    // Add more testimonials as needed...
];

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
                        {testimonials.map((testimonial, index) => (
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
                                <img className="quote" src={testimonial.quoteImage} alt="quote" />
                                <p className="fs-18-c text-center">{`"${testimonial.quote}"`}</p>
                                <div className="rating">
                                    <img className="img-fluid" src={testimonial.ratingImage} alt="rating" />
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
