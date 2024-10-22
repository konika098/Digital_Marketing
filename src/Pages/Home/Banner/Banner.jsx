import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css'; 

const Banner = () => {
  return (
    <div className="hero__section">
      <Container>
        <div className="hero__area">
          <Row className="align-items-center">
            <Col lg={7}>
              <img className="img-fluid banner-image" src="./assets/images/growth-1.png" alt="Growth Image" />
              <h1 className="hero-title">
                Improve your Business
                <span id="bars" className="d-none d-xl-block"></span>
              </h1>
              <h1 className="hero-title-2">with our Digital Marketing services</h1>

              <p className="hero-text">
                Our goal is to make it as easy as possible for you to walk away with the solution that <br className="d-none d-xl-block" />
                suits your needs perfectly. Discover how we can transform your online presence.
              </p>

              <div className="btn-group">
                <a href="./contact.html">
                  <Button variant="success" className="dark">
                    Get Started
                  </Button>
                </a>
                <a href="./service.html">
                  <Button variant="success" className="light">
                    Pricing <i className="fa-solid fa-chevron-right"></i>
                  </Button>
                </a>
              </div>

              <p className="client-info">Trusted by our Clients</p>
              <div className="client-img">
                <img className="img-fluid" src="./assets/images/clients.png" alt="Clients" />
              </div>
            </Col>

            <Col lg={5}>
              <div className="hero-left-side position-relative">
                <img className="img-fluid d-block d-xl-none" src="./assets/images/bg.png" alt="Background" />
                <img className="img-fluid d-none d-xl-block" src="./assets/images/BG-1.png" alt="Background Large" />
              </div>

              <div className="other-img">
                <img
                  className="position-absolute imgOne animatedImg img-fluid d-none d-xl-block"
                  src="./assets/images/bg-img-part-1.png"
                  alt="Decorative Image 1"
                />
                <img
                  className="position-absolute imgTwo animatedImg img-fluid d-none d-xl-block"
                  src="./assets/images/bg-img-part-2.png"
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
