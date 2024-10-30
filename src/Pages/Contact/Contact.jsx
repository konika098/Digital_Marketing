import { Link } from 'react-router-dom';
import contactData from '/public/Contact.json';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-area">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="fs-52-c">{`Ready to get started? Let's chat`}</h2>
              <div className="info-parent">
                {contactData.contactInfo.map((info, index) => (
                  <div className="info-child" key={index}>
                    <i className={`fa-solid ${info.icon}`}></i>
                    <Link href={info.link}>
                      <span className="fs-20-s">{info.label}</span>
                    </Link>
                    {info.description && <p className="fs-italic">{info.description}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <section className="contact-wrap">
                <h3 className="fs-32-c form-title">Send your Query Here</h3>
                <form action="#" className="contact-form">
                  <div className="row">
                    {contactData.formFields.slice(0, 4).map((field, index) => (
                      <div className={`col-sm-${field.type === 'textarea' ? '12' : '6'}`} key={index}>
                        <div className="input-block">
                          <label className="fs-20-k">{field.label}</label>
                          {field.type === 'textarea' ? (
                            <textarea
                              required={field.required}
                              rows={field.rows}
                              className={field.className}
                              placeholder={field.placeholder}
                              style={{ borderRadius: '21px' }}
                            ></textarea>
                          ) : (
                            <input
                              required={field.required}
                              type={field.type}
                              className={field.className}
                            />
                          )}
                        </div>
                      </div>
                    ))}
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
