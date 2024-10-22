import React from 'react';
import './Service.css'; 

const Service = () => {
  return (
    <section className="service-section overflow-hidden">
      <div className="container">
        <div className="service-area">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <p className="fs-52-w res-425">Our services solve any business problem</p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <p style={{ color: '#D0D0D0', paddingBottom: '33px' }} className="fs-18">
                Our team has a successful track record of helping brands
                <br className="d-none d-xl-block" />
                scale profitably based on high-performing strategies.
              </p>
              <a href="./service.html">
                <p className="simple">See More <i className="fa-solid fa-chevron-right"></i></p>
              </a>
            </div>
          </div>
        </div>

        {/* Card section */}
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <a href="./service-details.html">
              <div className="new_card" 
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <div className="new-card-img-top">
                  <img className="img-fluid" src="./assets/images/paid.png" alt="img" />
                </div>
                <h5 className="card-title">Paid Media</h5>
                <p className="card-text">
                  Increasing conversions, repeat traffic, and online authority across your website is our top priority.
                </p>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="./service-details.html">
              <div className="new_card"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1400"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <div className="new-card-img-top">
                  <img className="img-fluid" src="./assets/images/optim.png" alt="img" />
                </div>
                <h5 className="card-title">Website Optimization</h5>
                <p className="card-text">
                  In order for your funnel to be successful, you need to make it as smooth as possible.
                </p>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="./service-details.html">
              <div className="new_card"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <div className="new-card-img-top">
                  <img className="img-fluid" src="./assets/images/market.png" alt="img" />
                </div>
                <h5 className="card-title">Digital Marketing</h5>
                <p className="card-text">
                  Leads are nurtured through our email, SMS, and automation services, resulting in customer acquisition and retention.
                </p>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
