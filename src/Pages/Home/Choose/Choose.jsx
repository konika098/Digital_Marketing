import { useEffect, useState } from 'react';

const Choose = () => {
  const [chooseData, setChooseData] = useState(null);

  useEffect(() => {
    fetch('/Choose.json')
      .then((response) => response.json())
      .then((data) => setChooseData(data))
      .catch((error) => console.error('Error fetching choose data:', error));
  }, []);


  // if (!chooseData) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="choose-section">
      <div className="container">
        <div className="choose-area choose-aside">
          <div className="row">
            <div className="col-lg-6">
              <span className="fs-18 about-sub">Why Choose Us</span>
              <h3 className="fs-52-c" style={{ marginTop: '24px' }}>
                {chooseData?.heading.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br className={index === 0 ? "d-none d-xl-block" : ""} />
                  </span>
                ))}
              </h3>
              <p className="fs-18 about-text">
                {chooseData?.description}
              </p>

              {chooseData?.points.map((point, index) => (
                <div className="child" style={{ paddingBottom: index === chooseData?.points.length - 1 ? '32px' : '24px' }} key={index}>
                  <img className="img-fluid" src="https://i.postimg.cc/c4kqRm3c/tick.png" alt="img" />
                  <p className="fs-18-c res-375">{point}</p>
                </div>
              ))}

              <a href="/contact" className="btn btn-success dark">Contact Us</a>
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-5">
              <div className="choose-img">
                <img className="img-fluid" src="https://i.postimg.cc/BbNrw5V4/choose-img.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
