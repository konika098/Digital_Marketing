import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';

const Menubar = () => {
  const menuItems = [
    { "label": "Home", "href": "/", "isActive": true },
    { "label": "About us", "href": "/about", "isActive": false },
    { "label": "Our Services", "href": "/service", "isActive": false },
    { "label": "Blog", "href": "/blog", "isActive": false },
    { "label": "Contact", "href": "/contact", "isActive": false }
  ]

  const buttonText = "Get Started";
  return (
    <div className="menubar__section">
      <Container>
        <Navbar expand="lg" bg="light">
          <Container fluid>
            <Navbar.Brand href="/">
              <img className="img-fluid" src="https://i.postimg.cc/qBPtwsd2/logo.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent">
              <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars"></i>
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="mx-auto">
                {menuItems.map((item, index) => (
                  <Nav.Link
                    key={index}
                    href={item.href}
                    className={location.pathname === item.href ? 'active' : ''} 
                  >
                    {item.label}
                  </Nav.Link>
                ))}
              </Nav>
              <Form className="d-flex">
                <Button href="/service" variant="outline-primary" className="btn btn-success">
                  {buttonText}
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Menubar;
