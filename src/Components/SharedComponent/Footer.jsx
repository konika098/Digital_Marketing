import  { useEffect, useState } from 'react';
import footerLogo from "/public/assets/footer-logo.png";

const Footer = () => {
    const [footerMenus, setFooterMenus] = useState([]);
    const [contactDetails, setContactDetails] = useState([]);
    const [socialLinks, setSocialLinks] = useState([]);

    useEffect(() => {
      
        fetch('Footer.json')
            .then(response => response.json())
            .then(data => {
                setFooterMenus(data.footerMenus);
                setContactDetails(data.contactDetails);
                setSocialLinks(data.socialLinks);
            })
            .catch(error => console.error('Error fetching footer data:', error));
    }, []);

    return (
        <>
            <div className="footer__section">
                <div className="container">
                    <div className="footer__area">
                        <FooterLogo socialLinks={socialLinks} />
                        {footerMenus.map((menu, index) => (
                            <FooterMenu key={index} title={menu.title} links={menu.links} />
                        ))}
                        <FooterContact contactDetails={contactDetails} />
                    </div>
                </div>
            </div>

            <div className="privacy__section">
                <div className="container">
                    <div className="privacy__area">
                        <div className="copyright-title">
                            <p>Copyright © 2023 OneGrowth</p>
                        </div>
                        <div className="privacy-title">
                            <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const FooterLogo = ({ socialLinks }) => (
    <div className="footer_logo">
        <a href="./index.html">
            <img className="img-fluid" src={footerLogo} alt="Footer Logo" />
        </a>
        <p className="fs-18-w footer-logo-text">
            Lorem ipsum dolor sit amet
            <br className="d-none d-lg-block" />
            consectetur adipiscing
            <br className="d-block d-lg-none" />
            elit aliquam
        </p>
        <div className="social-media">
            {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    <i className={link.icon}></i>
                </a>
            ))}
        </div>
    </div>
);

const FooterMenu = ({ title, links }) => (
    <div className="footer-menu">
        <p className="company-title">{title}</p>
        {links.map((link, index) => (
            <a key={index} href={link.href}>
                <span className="fs-18-w">{link.label}</span>
            </a>
        ))}
    </div>
);

const FooterContact = ({ contactDetails }) => (
    <div className="footer-menu">
        <p className="company-title">Contact us</p>
        {contactDetails.map((contact, index) => (
            <a key={index} href={contact.href}>
                <i className={contact.icon}></i>
                <span className="fs-18-w">{contact.label}</span>
            </a>
        ))}
    </div>
);

export default Footer;
