import { Navbar, Container, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Menubar = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Our Services", href: "/service" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const buttonText = "Get Started";
  const location = useLocation();

  return (
    <div className="menubar__section">
      <Container>
        <Navbar expand="lg" bg="light">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <img className="img-fluid" src="https://i.postimg.cc/qBPtwsd2/logo.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent">
              <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars"></i>
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarSupportedContent">
              <div className="mx-auto d-flex">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Form className="d-flex">
                <Link to="/service" className="btn btn-success">
                  {buttonText}
                </Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Menubar;
