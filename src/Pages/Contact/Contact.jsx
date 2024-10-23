const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-area">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="fs-52-c">{`Ready to get started? Let's chat`}</h2>
              <div className="info-parent">
                <div className="info-child">
                  <i className="fa-solid fa-location-dot"></i>
                  <a href="https://www.google.com/maps">
                    <span className="fs-20-s">Calgary, Canada</span>
                  </a>
                </div>
                <p className="fs-italic">Call directly:</p>
                <div className="info-child">
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+8801978159172" target="_blank" rel="noopener noreferrer">
                    <span className="fs-20-s">+1 403 465 2617</span>
                  </a>
                </div>
                <p className="fs-italic">Send an e-mail</p>
                <div className="info-child">
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:naharweb15@gmail.com">
                    <span className="fs-20-s">yourmail@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <section className="contact-wrap">
                <h3 className="fs-32-c form-title">Send your Query Here</h3>
                <form action="#" className="contact-form">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="fs-20-k">First Name*</label>
                        <input required className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="fs-20-k">Last Name*</label>
                        <input required className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="fs-20-k">Email Address*</label>
                        <input required className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="fs-20-k">Subject*</label>
                        <input required className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block textarea">
                      <label className="fs-20-k">Comments/Questions*</label>
                      <textarea rows="3" required className="form-control" style={{ borderRadius: '21px' }} placeholder="Please type your message here..."></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button type="submit" className="btn btn-success purple">Send Message</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
