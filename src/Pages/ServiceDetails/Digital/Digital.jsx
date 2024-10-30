import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Digital = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/Digital.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching card data:', error));
  }, []);

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
              <p style={{ color: '#D0D0D0', paddingBottom: '33px' }} className="fs-18">
                Ullamcorper risus ultrices risus lorem. Mollis libero in pellentesque potenti. Vulputate ut aliquam, consectetur
              </p>
              <Link href="/"></Link>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {cards.map((card) => (
            <div className="col-md-6 col-lg-4" key={card.id}>
              <div className="new_card service-detl-res">
                <div>
                  <img className="img-fluid" src={card.image} alt={card.title} />
                </div>
                <h5 className="card-title text-white">{card.title}</h5>
                <div className="card-parent">
                  <div className="card-child">
                    <p className="card-text">
                      {card.text.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          <br className="d-none d-xl-block" />
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="card-icon">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Digital;
