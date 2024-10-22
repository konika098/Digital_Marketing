import React from 'react';
import './Marketing.css'; 

const Marketing = () => {
  return (
    <div className="marketing-section">
      <div className="container">
        <div className="marketing-area">
          <h4
            className="fs-52-w text-center"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            Make your marketing more
            <br className="d-none d-md-block" />
            effective
          </h4>
          <p
            className="fs-18 market-text"
            style={{ textAlign: 'center', color: '#D0D0D0', padding: '24px 0 77px 0' }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            E-commerce brands can acquire and retain new customers using
            <br className="d-none d-lg-block" />
            solutions that span the entire customer journey.
          </p>
          <div className="row">
            <div className="col-lg-5">
              <div
                className="five"
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <h5 className="fs-32-w">Marketing Automation</h5>
                <p className="fs-18-w" style={{ padding: '12px 0 18px 0' }}>
                  Our team has a successful track record
                  <br className="d-none d-lg-block" />
                  of helping brands.
                </p>
                <a href="#">
                  <p className="simple">Learn More <i className="fa-solid fa-arrow-right-long"></i></p>
                </a>
                <div className="loading-img">
                  <img className="img-fluid w-100" style={{ paddingTop: '38px' }} src="./assets/images/loading.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="seven"
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <h5 className="fs-32-c">Marketing Automation</h5>
                <p className="fs-18-c" style={{ padding: '12px 0 18px 0' }}>
                  Our team has a successful track record of helping brands scale
                  profitably based on high-performing strategies. E-commerce brands can acquire and retain new customers using solutions that span the entire customer journey.
                </p>
                <a href="#">
                  <p className="simple" style={{ color: '#260058' }}>Learn More <i className="fa-solid fa-arrow-right-long"></i></p>
                </a>
                <div className="seven-img">
                  <img className="img-fluid" style={{ paddingTop: '62px' }} src="./assets/images/automation.png" alt="img" />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div
                className="twelve"
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h5 className="fs-32-c">Social Media Marketing</h5>
                    <p className="fs-18-c" style={{ padding: '12px 0 18px 0' }}>
                      Leads are nurtured through our email, SMS, and automation services, resulting in customer acquisition and retention.
                    </p>
                    <a href="#">
                      <p className="simple" style={{ color: '#260058' }}>Learn More <i className="fa-solid fa-arrow-right-long"></i></p>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <div className="smm-img">
                      <img className="img-fluid w-100" src="./assets/images/smm.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
