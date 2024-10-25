import footerLogo from "/public/assets/footer-logo.png";
import { footerData } from "../../utils/data"; 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer__section">
        <div className="container">
          <div className="footer__area">
            <div className="footer-parent">
              <div className="footer_logo">
                <Link to='/'><img className="img-fluid" src={footerLogo} alt="Footer Logo" /></Link>
                <p className="fs-18-w footer-logo-text">
                  Lorem ipsum dolor sit amet
                  <br className="d-none d-lg-block" />
                  consectetur adipiscing elit
                  <br className="d-block d-lg-none" /> aliquam
                </p>
                <div className="social-media">
                  {footerData.socialLinks.map((link, index) => (
                    <Link to={link.href} key={index}><i className={link.icon}></i></Link>
                  ))}
                </div>
              </div>
              {footerData.footerMenus.map((menu, index) => (
                <div key={index} className="footer-menu text-white">
                  <p className="company-title">{menu.title}</p>
                  {menu.links.map((link, linkIndex) => (
                    <Link key={linkIndex} to={link.href}>
                      <span className="fs-18-w">{link.label}</span></Link>
                  ))}
                </div>
              ))}
              <div className="footer-menu">
                <p className="company-title">Contact Us</p>
                {footerData.contactDetails.map((contact, index) => (
                  <div key={index} className="contact-child">
                    <i className={contact.icon}></i>
                    <Link to={contact.href}><span className="fs-18-w">{contact.label}</span></Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
