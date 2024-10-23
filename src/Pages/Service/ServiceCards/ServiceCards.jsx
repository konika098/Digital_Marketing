import { useEffect } from 'react';
import './ServiceCards.css'; 
import 'aos/dist/aos.css';
import AOS from 'aos';
import servicesData from '/public/ServiceSection.json';
import ServiceCard from './ServiceCard';

const ServiceCards = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

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
              <a href="/about">Learn More</a>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {servicesData.map(service => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              text={service.text}
              animation={service.animation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
