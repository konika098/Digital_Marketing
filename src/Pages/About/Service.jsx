
import serviceData from '/public/AboutService.json'; 

const Service = () => {
    return (
        <section className="service-section">
            <div className="container">
                <div className="service-area">
                    <div className="top-content">
                        <h2 className="fs-52-c res-425" 
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false">
                            What clients value most <br className="d-none d-xl-block" /> about us
                        </h2>
                        <p className="fs-18-s seo-text" 
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false">
                            Find a team of digital marketers you can rely on. Every day, we <br className="d-none d-md-block" />
                            build trust through communication, transparency, and results.
                        </p>
                    </div>
                    <div className="row">
                        {serviceData.map(card => (
                            <div key={card.id} className="col-md-6 col-lg-4">
                                <div className="new_card card-res"
                                    data-aos={card.id === 1 ? "fade-right" : card.id === 2 ? "fade-up" : "fade-left"}
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="1200"
                                    data-aos-easing="ease-in-out"
                                    data-aos-once="false">
                                    <div className="new-card-img-top">
                                        <img className="img-fluid first" src={card.imgSrcHover} alt={card.altText} />
                                        <img className="img-fluid second" src={card.imgSrc} alt={card.altText} />
                                    </div>
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="fs-18-s">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
