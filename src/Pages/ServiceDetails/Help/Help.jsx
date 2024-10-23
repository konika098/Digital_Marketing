import React from 'react';
import './Help.css'; // Ensure you import your CSS file

const Help = () => {
  return (
    <div className="helping-section">
      <div className="container">
        <div className="helping-area">
          <h3 className="fs-52-c help-title">
            How Can We Helping You<br className="d-none d-lg-block" />
            at this Moment?
          </h3>
          <p className="fs-18-k help-text">
            Ullamcorper risus ultrices risus lorem, Mollis libero in pellentesque<br className="d-none d-lg-block" />
            Vulputate ut aliquam, consectetur turpis
          </p>

          <div className="row">
            <div className="col-lg-6 pe-lg-5">
              {[
                { id: 'faq-drawer', title: 'What is Digital Marketing?', content: 'Conveniently customize revolutionary strategic theme areas covalent human capital. Quickly myocardinate cross-platform action items rather than innovative infrastructures perfect' },
                { id: 'faq-drawer-2', title: 'How to Increase My Product Sales?', content: 'Conveniently customize revolutionary strategic theme areas covalent human capital. Quickly myocardinate cross-platform action items rather than innovative infrastructures perfect' },
                { id: 'faq-drawer-3', title: 'Which is the Best SEO Tools 2023?', content: 'Conveniently customize revolutionary strategic theme areas covalent human capital. Quickly myocardinate cross-platform action items rather than innovative infrastructures perfect' },
              ].map((faq) => (
                <div className="faq-drawer" key={faq.id}>
                  <input className="faq-drawer__trigger" id={faq.id} type="checkbox" />
                  <label className="faq-drawer__title fs-24-c" htmlFor={faq.id}>{faq.title}</label>
                  <div className="faq-drawer__content-wrapper">
                    <div className="faq-drawer__content">
                      <p className="fs-18-s accord-text">{faq.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6 ps-lg-5">
              {[
                { id: 'faq-drawer-4', title: 'How to Improve Business Strategy?', content: 'Conveniently customize revolutionary strategic theme areas covalent human capital. Quickly myocardinate cross-platform action items rather than innovative infrastructures perfect' },
                { id: 'faq-drawer-5', title: 'How to Increase My Website Traffics?', content: 'Conveniently customize revolutionary strategic theme areas covalent human capital. Quickly myocardinate cross-platform action items rather than innovative infrastructures perfect' },
                { id: 'faq-drawer-6', title: 'What is the Best Social Media for Boosting?', content: 'Conveniently customize revolutionary strategic theme areas covalent human capital. Quickly myocardinate cross-platform action items rather than innovative infrastructures perfect' },
              ].map((faq) => (
                <div className="faq-drawer" key={faq.id}>
                  <input className="faq-drawer__trigger" id={faq.id} type="checkbox" />
                  <label className="faq-drawer__title fs-24-c" htmlFor={faq.id}>{faq.title}</label>
                  <div className="faq-drawer__content-wrapper">
                    <div className="faq-drawer__content">
                      <p className="fs-18-s accord-text">{faq.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
