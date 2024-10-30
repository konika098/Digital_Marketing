import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Slider from "../Testimonial/Slider";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ once: true }); 
    AOS.refresh();
  }, []);

  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="testimonial-area">
          <div className="test-sub">
            <span className="about-sub fs-18">Testimonial</span>
            <h3

              className="test-sub fs-52-c" style={{ margin: '30px 0' }}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              What Our Clients Are <br className="d-none d-md-block" />
              Saying About Us
            </h3>
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
