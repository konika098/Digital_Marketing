

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ image, title, text, animation }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <a href="/service-details">
        <div
          className={`new_card`}
          data-aos={animation}
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
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

export default ServiceCard;
