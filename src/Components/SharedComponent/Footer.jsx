import { useEffect, useState } from "react";
import footerLogo from "/public/assets/footer-logo.png";

const Footer = () => {
  const [footerMenus, setFooterMenus] = useState([]);
  const [contactDetails, setContactDetails] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    fetch("Footer.json")
      .then((response) => response.json())
      .then((data) => {
        setFooterMenus(data.footerMenus);
        setContactDetails(data.contactDetails);
        setSocialLinks(data.socialLinks);
      })
      .catch((error) => console.error("Error fetching footer data:", error));

  }, []);

  return (
    <div>
      <div className="footer__section">
        <div className="container">
          <div className="footer__area">
            <div className="footer-parent">
              <div className="footer_logo">
                <a href="/">
                  <img className="img-fluid" src={footerLogo} alt="Footer Logo" />
                </a>
                <p className="fs-18-w footer-logo-text">
                  Lorem ipsum dolor sit amet
                  <br className="d-none d-lg-block" />
                  consectetur adipiscing elit
                  <br className="d-block d-lg-none" /> aliquam
                </p>
                <div className="social-media">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
              {footerMenus.map((menu, index) => (
                <div key={index} className="footer-menu text-white">
                  <p className="company-title">{menu.title}</p>
                  {menu.links.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.href}>
                      <span className="fs-18-w">{link.label}</span>
                    </a>
                  ))}
                </div>
              ))}
              <div className="footer-menu">
                <p className="company-title">Contact Us</p>
                {contactDetails.map((contact, index) => (
                  <div key={index} className="contact-child">
                    <i className={contact.icon}></i>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      <span className="fs-18-w">{contact.label}</span>
                    </a>
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
