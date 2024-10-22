import React from "react";
import "./Pricing.css"; // Import your CSS file

const Pricing = () => {
  return (
    <div className="price-section">
      <div className="container">
        <div className="price-area">
          <span className="fs-18 choose-sub">Pricing Plan</span>
          <h3 className="fs-52-c" style={{ marginTop: "24px" }}>
            Our plans scale
            <br className="d-none d-xl-block" />
            with your business
          </h3>
          <div className="row">
            {/* Basic Plan */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card">
                <div className="icon-parent">
                  <img
                    className="img-fluid"
                    src="./assets/images/basic-icon.png"
                    alt="Basic Plan Icon"
                  />
                </div>
                <h5 className="price-sub">Basic</h5>
                <p className="fs-16-s">
                  Dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever
                </p>
                <div className="price-parent">
                  <span className="amount">$5.9</span>
                  <p className="month">MONTH</p>
                </div>
                <div className="price-list">
                  <div className="list-parent">
                    <img
                      className="img-fluid tick-default"
                      src="./assets/images/price-tick.png"
                      alt="icon"
                    />
                    <img
                      className="img-fluid tick-hover"
                      src="./assets/images/price-tick-hover.png"
                      alt="icon"
                    />
                    <p className="fs-18-k">Technical SEO</p>
                  </div>
                  <div className="list-parent">
                    <img
                      className="img-fluid tick-default"
                      src="./assets/images/price-tick.png"
                      alt="icon"
                    />
                    <img
                      className="img-fluid tick-hover"
                      src="./assets/images/price-tick-hover.png"
                      alt="icon"
                    />
                    <p className="fs-18-k">Search Marketing</p>
                  </div>
                  <div className="list-parent">
                    <img
                      className="img-fluid tick-default"
                      src="./assets/images/price-tick.png"
                      alt="icon"
                    />
                    <img
                      className="img-fluid tick-hover"
                      src="./assets/images/price-tick-hover.png"
                      alt="icon"
                    />
                    <p className="fs-18-k">Link Building</p>
                  </div>
                </div>
                <a href="#" className="btn btn-success purple purple-2">
                  CHOOSE PLAN
                </a>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card">
                <div className="icon-parent">
                  <img
                    className="img-fluid"
                    src="./assets/images/standard-icon.png"
                    alt="Standard Plan Icon"
                  />
                </div>
                <h5 className="price-sub">Standard</h5>
                <p className="fs-16-s">
                  Dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever
                </p>
                <div className="price-parent">
                  <span className="amount">$17.9</span>
                  <p className="month">MONTH</p>
                </div>
                <div className="price-list">
                  <div className="list-parent">
                    <img
                      className="img-fluid tick-default"
                      src="./assets/images/price-tick.png"
                      alt="icon"
                    />
                    <img
                      className="img-fluid tick-hover"
                      src="./assets/images/price-tick-hover.png"
                      alt="icon"
                    />
                    <p className="fs-18-k">Content Strategy</p>
                  </div>
                  <div className="list-parent">
                    <img
                      className="img-fluid tick-default"
                      src="./assets/images/price-tick.png"
                      alt="icon"
                    />
                    <img
                      className="img-fluid tick-hover"
                      src="./assets/images/price-tick-hover.png"
                      alt="icon"
                    />
                    <p className="fs-18-k">Google Analytics</p>
                  </div>
                  <div className="list-parent">
                    <img
                      className="img-fluid tick-default"
                      src="./assets/images/price-tick.png"
                      alt="icon"
                    />
                    <img
                      className="img-fluid tick-hover"
                      src="./assets/images/price-tick-hover.png"
                      alt="icon"
                    />
                    <p className="fs-18-k">Conversion Booster</p>
                  </div>
                </div>
                <a href="#" className="btn btn-success purple purple-2">
                  CHOOSE PLAN
                </a>
              </div>
            </div>

            {/* Expert Plan */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card">
                <div className="icon-parent">
                  <img
                    className="img-fluid"
                    src="./assets/images/expert-icon.png"
                    alt="Expert Plan Icon"
                  />
                </div>
                <h5 className="price-sub">Expert</h5>
                <p className="fs-16-s">
                  Dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever
                </p>
                <div className="price-parent">
                  <span className="amount">$29.9</span>
                  <p className="month">MONTH</p>
                </div>
                <div className="price-list">
                  <div className="list-parent">
                    <img
                      className="img-fluid tick-default"
                      src="./assets/images/price-tick.png"
                      alt="icon"
                    />
                    <img
                      className="img-fluid tick-hover"
                      src="./assets/images/price-tick-hover.png"
                      alt="icon"
                    />
                    <p className="fs-18-k">Pay Per Click</p>
                  </div>
                  <div className="list-parent">
                    <img
                      className="img-fluid tick-default"
                      src="./assets/images/price-tick.png"
                      alt="icon"
                    />
                    <img
                      className="img-fluid tick-hover"
                      src="./assets/images/price-tick-hover.png"
                      alt="icon"
                    />
                    <p className="fs-18-k">Digital Marketing</p>
                  </div>
                  <div className="list-parent">
                    <img
                      className="img-fluid tick-default"
                      src="./assets/images/price-tick.png"
                      alt="icon"
                    />
                    <img
                      className="img-fluid tick-hover"
                      src="./assets/images/price-tick-hover.png"
                      alt="icon"
                    />
                    <p className="fs-18-k">Website Design</p>
                  </div>
                </div>
                <a href="#" className="btn btn-success purple purple-2">
                  CHOOSE PLAN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
