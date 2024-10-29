import { useEffect, useState } from 'react';

const About = () => {
  const [aboutContent, setAboutContent] = useState(null);


  useEffect(() => {
    fetch('/About.json')
      .then((response) => response.json())
      .then((data) => setAboutContent(data))
      .catch((error) => console.error('Error fetching about content:', error));
  }, []);


  // if (!aboutContent) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="about-section">
      <div className="container">
        <div className="about-area">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-img">
                <img className="img-fluid" src="https://i.postimg.cc/HWQs9fW9/about-img.png" alt="About Us" />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="about-aside">
                <span className="fs-18 about-sub">{aboutContent?.aboutSection.heading}</span>
                <h3 className="fs-52-c" style={{ marginTop: '24px' }}>
                  {aboutContent?.title}
                </h3>
                <p className="fs-18 about-text">{aboutContent?.description}</p>
                <div className="row">
                  <div className="col-lg-12 col-xl-6">
                    {aboutContent?.aboutSection.points.slice(0, 2).map((point, index) => (
                      <div className="child" key={index}>
                        <img className="img-fluid" src="https://i.ibb.co.com/xGP3FL0/tick.png" alt="Tick" />
                        <p className="fs-18-b">{point}</p>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    {aboutContent?.aboutSection.points.slice(2).map((point, index) => (
                      <div className="child" key={index}>
                        <img className="img-fluid" src={aboutContent?.tickImage} alt="Tick" />
                        <p className="fs-18-b">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <a href={aboutContent?.buttonLink} className="btn btn-success dark">
                  {aboutContent?.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
