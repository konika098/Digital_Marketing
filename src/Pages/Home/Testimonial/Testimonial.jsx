import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Slider from "../Testimonial/Slider";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Optional: Animation occurs only once
    });
    AOS.refresh(); // Refresh AOS when the component mounts
  }, []);

  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="testimonial-area">
          <div className="test-sub">
            <span className="fs-18 about-sub">Testimonial</span>
          </div>
          <h3
            className="fs-52-c text-center"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            style={{ margin: "30px 0" }}
          >
            What Our Clients Are
            <br className="d-none d-md-block" />
            Saying About Us
          </h3>

          <div className="testimonial-slider-class">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
