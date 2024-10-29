import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
const Banner = () => {
  const [bannerContent, setBannerContent] = useState(null);

  useEffect(() => {
    fetch('/HomeBanner.json')
      .then((response) => response.json())
      .then((data) => setBannerContent(data))
      .catch((error) => console.error('Error fetching banner content:', error));
  }, []);


  // if (!bannerContent) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="hero__section">
      <Container>
        <div className="hero__area">
          <Row className="align-items-center">
            <Col lg={7}>
              <img className="img-fluid banner-image" src="https://i.ibb.co.com/LZjMbff/growth.png" alt="Growth Image" />
              <h1 className="hero-title">
                {bannerContent?.title}
                <span id="bars" className="d-none d-xl-block"></span>
              </h1>
              <h1 className="hero-title-2">{bannerContent?.subtitle}</h1>

              <p className="hero-text">
                {bannerContent?.text}
              </p>

              <div className="btn-group">
                {bannerContent?.buttons.map((button, index) => (
                  <a key={index} href={button.link}>
                    <Button variant={button.variant} className={button.className}>
                      {button.text}
                      {button.icon && <i className={button.icon}></i>}
                    </Button>
                  </a>
                ))}
              </div>

              <p className="client-info">{bannerContent?.clientInfo}</p>
              <div className="client-img">
                <img className="img-fluid" src="https://i.ibb.co.com/znq60PL/clients.png" alt="Clients" />
              </div>
            </Col>

            <Col lg={5}>
              <div className="hero-left-side position-relative">
                <img className="img-fluid d-block d-xl-none" src={bannerContent?.bgImages.small} alt="Background" />
                <img className="img-fluid d-none d-xl-block" src="https://i.ibb.co.com/7XC2M4B/BG-1.png" alt="Background Large" />
              </div>

              <div className="other-img">
                <img
                  className="position-absolute imgOne animatedImg img-fluid d-none d-xl-block"
                  src="https://i.ibb.co.com/bRtGyF3/bg-img-part-1.png"
                  alt="Decorative Image 1"
                />
                <img
                  className="position-absolute imgTwo animatedImg img-fluid d-none d-xl-block"
                  src="https://i.ibb.co.com/25cdz8X/bg-img-part-2.png"
                  alt="Decorative Image 2"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
