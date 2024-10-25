import serviceData from '/public/AboutService.json'; 

const Service = () => {
    return (
        <section className="service" style={{ marginTop: '100px' ,marginBottom:"100px"}}>
            <div className="container">
                <div className="">
                    <div className="top-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 className="fs-52-c res-425" style={{ textAlign: 'center' }}>
                            What clients value most <br className="d-none d-xl-block" /> about us
                        </h2>
                        <p className="fs-18-s seo-text" style={{ textAlign: 'center' }}>
                            Find a team of digital marketers you can rely on. Every day, we <br className="d-none d-md-block" />
                            build trust through communication, transparency, and results.
                        </p>
                    </div>
                    <div className="row flex-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {serviceData.map(card => (
                            <div key={card.id} className="col-md-6 col-lg-4" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                <div className="new_card card-res" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <div>
                                        <img className="img-fluid first" src={card.imgSrcHover} alt={card.altText} />
                                        <img className="img-fluid second" src={card.imgSrc} alt={card.altText} />
                                    </div>
                                    <h5 className=" text-white">{card.title}</h5>
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
