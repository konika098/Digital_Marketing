import AboutBg from "/public/assets/about-bg.png"

const AboutBanner = () => {
    return (
        <div className="about-page-section">
            <div className="container">
                <div className="about-page-area">
                    <span className="fs-18 about-sub">About Us</span>
                    <h3 
                        className="fs-52-c" 
                        style={{ marginTop: '24px' }} 
                    >
                        We do great things together
                    </h3>
                    <p 
                        className="fs-18 about-text" 
                    >
                        Find a team of digital marketers you can rely on. We build trust through
                        <br className="d-none d--block" />
                        communication, transparency, and results.
                    </p>

                    <div className="all-img-scale">
                        <img className="img-fluid" src={AboutBg} alt="About Us Background" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;
