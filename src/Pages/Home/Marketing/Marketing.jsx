import { useEffect, useState } from 'react'; 

const Marketing = () => {
  const [marketingData, setMarketingData] = useState(null);

  useEffect(() => {
    fetch('/Marketing.json')
      .then((response) => response.json())
      .then((data) => setMarketingData(data))
      .catch((error) => console.error('Error fetching marketing data:', error));
  }, []);

  if (!marketingData) {
    return <div>Loading...</div>; 
  }

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
            {marketingData.heading.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br className={index === 0 ? "d-none d-md-block" : ""} />
              </span>
            ))}
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
            {marketingData.subheading.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br className={index === 0 ? "d-none d-lg-block" : ""} />
              </span>
            ))}
          </p>
          <div className="row">
            {marketingData.sections.map((section, index) => (
              <div key={index} className={`col-lg-${index === 0 ? '5' : index === 1 ? '7' : '12'}`}>
                <div
                  className={`section-${index + 1}`}
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration={`${1000 + (index * 300)}`} 
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                >
                  <h5 className="fs-32-w">{section.title}</h5>
                  <p className="fs-18-w" style={{ padding: '12px 0 18px 0' }}>
                    {section.description}
                  </p>
                  <a href={section.link}>
                    <p className="simple">Learn More <i className="fa-solid fa-arrow-right-long"></i></p>
                  </a>
                  <div className="loading-img">
                    <img className="img-fluid w-100" style={{ paddingTop: index === 0 ? '38px' : '62px' }} src={section.image} alt="img" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
