import  { useEffect, useState } from 'react';
import ChooseItem from './ChooseItem';
import { Link } from 'react-router-dom';


const Choose = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/ChooseUs.json');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="choose-section">
      <div className="container">
        <div className="choose-area choose-aside">
          <div className="row">
            <div className="col-lg-6">
              <span className="fs-18 choose-sub">A strategy driven Marketing Agency</span>
              <h3 className="fs-52-c" style={{ marginTop: '24px' }}>
                Transform Your Digital Presence with Our Agency
              </h3>
              <p className="fs-18 integrate-text">
                Digital marketing refers to the practice of promoting products or services using digital
                technologies, primarily on the internet. This can include a range of techniques, such as
                social media marketing, search engine optimization (SEO), email marketing, pay-per-click
                advertising, and content marketing.
              </p>

              {items.map((item, index) => (
                <ChooseItem key={index} text={item.text} />
              ))}

              <Link href="#" className="btn btn-success dark dark-3">Discover More</Link>
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-5">
              <div className="choose-img">
                <img className="img-fluid" src="https://i.postimg.cc/XYd99n1c/agency-bg.png" alt="Agency Background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
