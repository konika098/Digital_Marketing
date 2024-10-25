// import  { useEffect, useState } from 'react';
// import footerLogo from "/public/assets/footer-logo.png";

// const Footer = () => {
//     const [footerMenus, setFooterMenus] = useState([]);
//     const [contactDetails, setContactDetails] = useState([]);
//     const [socialLinks, setSocialLinks] = useState([]);

//     useEffect(() => {
      
//         fetch('Footer.json')
//             .then(response => response.json())
//             .then(data => {
//                 setFooterMenus(data.footerMenus);
//                 setContactDetails(data.contactDetails);
//                 setSocialLinks(data.socialLinks);
//             })
//             .catch(error => console.error('Error fetching footer data:', error));
//     }, []);

//     return (
//         <>
//             <div classNameName="footer__section">
//                 <div classNameName="container">
//                     <div classNameName="footer__area">
//                         <FooterLogo socialLinks={socialLinks} />
//                         {footerMenus.map((menu, index) => (
//                             <FooterMenu key={index} title={menu.title} links={menu.links} />
//                         ))}
//                         <FooterContact contactDetails={contactDetails} />
//                     </div>
//                 </div>
//             </div>

//             <div classNameName="privacy__section">
//                 <div classNameName="container">
//                     <div classNameName="privacy__area">
//                         <div classNameName="copyright-title">
//                             <p>Copyright © 2023 OneGrowth</p>
//                         </div>
//                         <div classNameName="privacy-title">
//                             <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// const FooterLogo = ({ socialLinks }) => (
//     <div classNameName="footer_logo">
//         <a href="./index.html">
//             <img classNameName="img-fluid" src={footerLogo} alt="Footer Logo" />
//         </a>
//         <p classNameName="fs-18-w footer-logo-text">
//             Lorem ipsum dolor sit amet
//             <br classNameName="d-none d-lg-block" />
//             consectetur adipiscing
//             <br classNameName="d-block d-lg-none" />
//             elit aliquam
//         </p>
//         <div classNameName="social-media">
//             {socialLinks.map((link, index) => (
//                 <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
//                     <i classNameName={link.icon}></i>
//                 </a>
//             ))}
//         </div>
//     </div>
// );

// const FooterMenu = ({ title, links }) => (
//     <div classNameName="footer-menu">
//         <p classNameName="company-title">{title}</p>
//         {links.map((link, index) => (
//             <a key={index} href={link.href}>
//                 <span classNameName="fs-18-w">{link.label}</span>
//             </a>
//         ))}
//     </div>
// );

// const FooterContact = ({ contactDetails }) => (
//     <div classNameName="footer-menu">
//         <p classNameName="company-title">Contact us</p>
//         {contactDetails.map((contact, index) => (
//             <a key={index} href={contact.href}>
//                 <i classNameName={contact.icon}></i>
//                 <span classNameName="fs-18-w">{contact.label}</span>
//             </a>
//         ))}
//     </div>
// );

// export default Footer;

import footerLogo from "/public/assets/footer-logo.png";

const Footer = () => {
    return (
        <div>
            <div className="footer__section">
    <div className="container">
      <div className="footer__area">
        <div className="footer-parent">


          <div className="footer_logo">
            <a href="./index.html"><img className="img-fluid" src={footerLogo} />
</a>
            <p className="fs-18-w footer-logo-text">Lorem ipsum dolor sit amet<br className="d-none d-lg-block"/>
              consectetur adipiscing <br className="d-block d-lg-none" /> elit aliquam</p>
            <div className="social-media">
              <a href="https://www.facebook.com/Opediatech/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://www.instagram.com/opedia_technologies/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://bd.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://www.youtube.com/" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            </div>

          </div>


          <div className="footer-menu text-white">
            <p className="company-title">Company</p>
            <a href="./index.html"> <span className="fs-18-w">Home</span> </a>
            <a href="./about.html"> <span className="fs-18-w">About us</span> </a>
            <a href="./service.html"><span className="fs-18-w">Services </span> </a>
            <a href="./blog.html"> <span className="fs-18-w">Blog</span> </a>
            <a href="./contact.html"> <span className="fs-18-w">Contact</span> </a>
          </div>



          <div className="footer-menu">
            <p className="company-title">Support</p>
            <a href="#"><span className="fs-18-w">Getting started</span></a>
            <a href="#"><span className="fs-18-w">Help center</span></a>
            <a href="#"><span className="fs-18-w">Server status</span></a>
            <a href="#"><span className="fs-18-w">Report a bug</span></a>
            <a href="#"><span className="fs-18-w">Chat support</span></a>
          </div>
          <div className="footer-menu">
            <p className="company-title">Contacts us</p>
            <div className="contact-child">
              <i className="fa-regular fa-envelope"></i>
              <a href="mailto:naharweb15@gmail.com" target="_blank"><span className="fs-18-w">contact@company.com</span></a>
            </div>
            <div className="contact-child">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+8801978159172" target="_blank"><span className="fs-18-w">(414) 687 - 5892</span></a>
            </div>
            <div className="contact-child">
              <i className="fa-solid fa-location-dot"></i>
              <a href="https://www.google.com/maps" target="_blank"><span className="fs-18-w">794 Mcallister St <br className="d-none d-lg-block"/>
                San Francisco, 94102</span></a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
        </div>
    );
};

export default Footer;