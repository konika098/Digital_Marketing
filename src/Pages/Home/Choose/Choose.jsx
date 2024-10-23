import React, { useEffect, useState } from 'react';
import './Choose.css'; 
import tick from "/public/assets/tick.png";
import ChooseImg from "/public/assets/choose-img.png";

const Choose = () => {
  const [chooseData, setChooseData] = useState(null);

  useEffect(() => {
    fetch('/Choose.json')
      .then((response) => response.json())
      .then((data) => setChooseData(data))
      .catch((error) => console.error('Error fetching choose data:', error));
  }, []);


  if (!chooseData) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="choose-section">
      <div className="container">
        <div className="choose-area choose-aside">
          <div className="row">
            <div className="col-lg-6">
              <span className="fs-18 about-sub">Why Choose Us</span>
              <h3 className="fs-52-c" style={{ marginTop: '24px' }}>
                {chooseData.heading.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br className={index === 0 ? "d-none d-xl-block" : ""} />
                  </span>
                ))}
              </h3>
              <p className="fs-18 about-text">
                {chooseData.description}
              </p>

              {chooseData.points.map((point, index) => (
                <div className="child" style={{ paddingBottom: index === chooseData.points.length - 1 ? '32px' : '24px' }} key={index}>
                  <img className="img-fluid" src={tick} alt="img" />
                  <p className="fs-18-c res-375">{point}</p>
                </div>
              ))}

              <a href="./contact.html" className="btn btn-success dark">Contact Us</a>
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-5">
              <div className="choose-img">
                <img className="img-fluid" src={ChooseImg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
