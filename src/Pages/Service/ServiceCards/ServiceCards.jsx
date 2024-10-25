import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCards = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  const [serviceContent, setServiceContent] = useState(null);

  useEffect(() => {
    fetch("/Service.json")
      .then((response) => response.json())
      .then((data) => setServiceContent(data))
      .catch((error) =>
        console.error("Error fetching service content:", error)
      );
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
              <p className="fs-52-w res-425">
                Our services solve any business problem
              </p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <p style={{ color: '#D0D0D0', paddingBottom: '33px' }} className="fs-18">
                Our team has a successful track record of helping brands scale profitably based on high-performing strategies.
              </p>
              <a href="/about" className='text-white'>Learn More</a>
            </div>
          </div>
        </div>
        <div className="row g-4">
        <div className="row">
          {serviceContent.cards.map((card, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <a href={card.link}>
                <div
                  className="new_card"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                >
                  <div className="new-card-img-top">
                    <img
                      className="img-fluid"
                      src={card.image}
                      alt={card.title}
                    />
                  </div>
                  <h5 className="card-title text-white">{card.title}</h5>
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: card.text }}
                  />

                  <FaArrowRight className="arrow" />
                </div>
              </a>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
