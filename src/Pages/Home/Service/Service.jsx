import  { useEffect, useState } from 'react';

const Service = () => {
  const [serviceContent, setServiceContent] = useState(null);

  useEffect(() => {
    fetch('/Service.json')
      .then((response) => response.json())
      .then((data) => setServiceContent(data))
      .catch((error) => console.error('Error fetching service content:', error));
  }, []);

  if (!serviceContent) {
    return <div>Loading...</div>; 
  }

  return (
    <section className="service-section overflow-hidden">
      <div className="container">
        <div className="service-area">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <p className="fs-52-w res-425">{serviceContent.mainTitle}</p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <p style={{ color: '#D0D0D0', paddingBottom: '33px' }} className="fs-18">
                {serviceContent.subtitle}
              </p>
              <a href={serviceContent.buttonLink}>
                <p className="simple">{serviceContent.buttonText} <i className="fa-solid fa-chevron-right"></i></p>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          {serviceContent.cards.map((card, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <a href={card.link}>
                <div className="new_card" >
                  <div className="new-card-img-top">
                    <img className="img-fluid" src={card.image} alt={card.title} />
                  </div>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
