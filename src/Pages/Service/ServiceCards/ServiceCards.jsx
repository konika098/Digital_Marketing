import React from 'react';
import './ServiceCards.css'; // Assuming CSS is in a separate file
import 'aos/dist/aos.css'; // Importing AOS if required

const ServiceCard = ({ image, title, text, animation }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <a href="./service-details.html">
        <div className={`new_card ${animation}`}>
          <div className="new-card-img-top">
            <img className="img-fluid" src={image} alt={title} />
          </div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <i className="fa-solid fa-arrow-right-long"></i>
        </div>
      </a>
    </div>
  );
};

const ServiceCards = () => {
  // Service data for mapping
  const services = [
    {
      id: 1,
      image: './assets/images/paid.png',
      title: 'Paid Media',
      text: 'Increasing conversions, repeat traffic, and online authority across your website is our top priority.',
      animation: 'data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="false"',
    },
    {
      id: 2,
      image: './assets/images/optim.png',
      title: 'Website Optimization',
      text: 'In order for your funnel to be successful, you need to make it as smooth as possible.',
      animation: 'data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-once="false"',
    },
    {
      id: 3,
      image: './assets/images/market.png',
      title: 'Digital Marketing',
      text: 'Leads are nurtured through our email, SMS, and automation services, resulting in customer acquisition and retention.',
      animation: 'data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="false"',
    },
    // Add the remaining service items here...
  ];

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
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className="row g-4">
          {services.map(service => (
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
