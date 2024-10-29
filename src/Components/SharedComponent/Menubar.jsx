import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';

const Menubar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [buttonText, setButtonText] = useState('');
  // const [buttonLink, setButtonLink] = useState('');

  
  useEffect(() => {
    fetch('/MenuItems.json')
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data.menuItems);
        setButtonText(data.buttonText);
        // setButtonLink(data.buttonLink);
      })
      .catch((error) => console.error('Error fetching menu items:', error));
  }, []);

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
                    className={item.isActive ? 'active' : ''}
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
