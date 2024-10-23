import React from "react";
import "./ServiceDetailsBanner.css"; 

const ServiceDetailsBanner = () => {
  return (
    <div className="service-detaile-section">
      <div className="container">
        <div className="service-detaile-area">
          <span className="fs-18 about-sub">Digital Marketing</span>
          <h3
            className="fs-52-c"
            style={{ marginTop: "24px" }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            We Provide Awesome Digital
            <br className="d-none d-xl-block" />
            Marketing
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
            From strategic planning to execution, we cover the entire spectrum
            of digital marketing services. Harness <br className="d-none d-xl-block" />
            the power of search engine optimization (SEO) to ensure your brand
            stands out in search results, <br className="d-none d-xl-block" />
            drawing in organic traffic. Seamlessly navigate the world of
            pay-per-click (PPC) advertising with our <br className="d-none d-xl-block" />
            expertly managed campaigns, maximizing your ROI.
          </p>

          <div className="about-img">
            <img
              className="img-fluid"
              src="/public/assets/service-details-bg.png"
              alt="Digital Marketing Service"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsBanner;
