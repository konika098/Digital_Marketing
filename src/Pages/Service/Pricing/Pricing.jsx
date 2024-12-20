import  { useEffect, useState } from "react";
import pricingData from "/public/Pricing.json"; 
import { Link } from "react-router-dom";

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    setPlans(pricingData);
  }, []);

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
            {plans.map((plan) => (
              <div key={plan.id} className="col-12 col-md-6 col-lg-4">
                <div className="price-card">
                  <div className="icon-parent">
                    <img
                      className="img-fluid"
                      src={plan.icon}
                      alt={`${plan.title} Plan Icon`}
                    />
                  </div>
                  <h5 className="price-sub">{plan.title}</h5>
                  <p className="fs-16-s">{plan.description}</p>
                  <div className="price-parent">
                    <span className="amount">{plan.amount}</span>
                    <p className="month">MONTH</p>
                  </div>
                  <div className="price-list">
                    {plan.features.map((feature, index) => (
                      <div className="list-parent" key={index}>
                        <img
                          className="img-fluid tick-default"
                          src="https://i.postimg.cc/3wQCqk0c/price-tick.png"
                          alt="icon"
                        />
                        <img
                          className="img-fluid tick-hover"
                          src="https://i.postimg.cc/bJz0z4T0/price-tick-hover.png"
                          alt="icon"
                        />
                        <p className="fs-18-k">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/service" className="btn btn-success purple purple-2">
                    CHOOSE PLAN
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
