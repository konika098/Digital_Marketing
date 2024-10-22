import React from 'react';
import './Footer.css'; // Assuming you will place your CSS in this file

const Footer = () => {
    return (
        <>
            <div className="footer__section">
                <div className="container">
                    <div className="footer__area">
                        <div className="footer-parent">

                            <div className="footer_logo">
                                <a href="./index.html">
                                    <img className="img-fluid" src="./assets/images/footer-logo.png" alt="Footer Logo" />
                                </a>
                                <p className="fs-18-w footer-logo-text">
                                    Lorem ipsum dolor sit amet
                                    <br className="d-none d-lg-block" />
                                    consectetur adipiscing 
                                    <br className="d-block d-lg-none" /> 
                                    elit aliquam
                                </p>
                                <div className="social-media">
                                    <a href="https://www.facebook.com/Opediatech/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="https://www.instagram.com/opedia_technologies/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="https://bd.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="footer-menu">
                                <p className="company-title">Company</p>
                                <a href="./index.html"><span className="fs-18-w">Home</span></a>
                                <a href="./about.html"><span className="fs-18-w">About us</span></a>
                                <a href="./service.html"><span className="fs-18-w">Services</span></a>
                                <a href="./blog.html"><span className="fs-18-w">Blog</span></a>
                                <a href="./contact.html"><span className="fs-18-w">Contact</span></a>
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
                                    <a href="mailto:naharweb15@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-18-w">contact@company.com</span>
                                    </a>
                                </div>
                                <div className="contact-child">
                                    <i className="fa-solid fa-phone"></i>
                                    <a href="tel:+8801978159172" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-18-w">(414) 687 - 5892</span>
                                    </a>
                                </div>
                                <div className="contact-child">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-18-w">794 Mcallister St <br className="d-none d-lg-block" /> San Francisco, 94102</span>
                                    </a>
                                </div>
                            </div>

                        </div>
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

export default Footer;
