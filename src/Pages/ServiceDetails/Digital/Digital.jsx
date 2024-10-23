const Digital = () => {
  return (
    <section className="service-section serv-detl-res overflow-hidden">
      <div className="container">
        <div className="service-area">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="fs-52-w res-425">
                Digital Marketing Strategy
                <br className="d-none d-md-block d-lg-none" /> for Your Business
              </p>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <p style={{ color: "#D0D0D0", paddingBottom: "33px" }} className="fs-18">
                Ullamcorper risus ultrices risus lorem. Mollis libero in pellentesque potenti. Vulputate ut aliquam, consectetur
              </p>
              <a href="#"></a>
            </div>
          </div>
        </div>

        {/* Card section */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="new_card service-detl-res" 
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="false">
              
              <div className="new-card-img-top">
                <img className="img-fluid" src="./assets/images/card-img-1.png" alt="Campaign Working" />
              </div>
              <h5 className="card-title">Campaign Working</h5>
              <div className="card-parent">
                <div className="card-child">
                  <p className="card-text">
                    Risus ultrices risus lorem.
                    <br className="d-none d-xl-block" />
                    Mollis libero into Tate ut aliquam,
                    <br className="d-none d-xl-block" />
                    consecteturs
                  </p>
                </div>
                <div className="card-icon">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="new_card service-detl-res" 
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="false">
              
              <div className="new-card-img-top">
                <img className="img-fluid" src="./assets/images/card-img-2.png" alt="Content Strategy" />
              </div>
              <h5 className="card-title">Content Strategy</h5>
              <div className="card-parent">
                <div className="card-child">
                  <p className="card-text">
                    Risus ultrices risus lorem.
                    <br className="d-none d-xl-block" />
                    Mollis libero into Tate ut
                    <br className="d-none d-xl-block" />
                    aliquam, consecteturs
                  </p>
                </div>
                <div className="card-icon">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="new_card service-detl-res" 
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="false">
              
              <div className="new-card-img-top">
                <img className="img-fluid" src="./assets/images/card-img-3.png" alt="Social Media Boosting" />
              </div>
              <h5 className="card-title">Social Media Boosting</h5>
              <div className="card-parent">
                <div className="card-child">
                  <p className="card-text">
                    Risus ultrices risus lorem.
                    <br className="d-none d-xl-block" />
                    Mollis libero into Tate ut aliquam,
                    <br className="d-none d-xl-block" />
                    consecteturs
                  </p>
                </div>
                <div className="card-icon">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Digital;
