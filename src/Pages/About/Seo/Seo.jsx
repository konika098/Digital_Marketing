import seoData from '/public/Seo.json'; 
import seo5 from '/public/assets/seo-bg.png';
import SeoCard from './SeoCard';

const Seo = () => {
    return (
        <div className="seo-section">
            <div className="container">
                <div className="section-area">
                    <div className="row align-items-center seo-res">
                        <div className="col-md-12 col-lg-6 col-xl-6">
                            <span className="fs-18 seo-sub">How we are built different</span>
                            <h3 className="fs-52-c seo-title">Trustworthy SEO Agency for Sustainable Online Growth</h3>
                            <p className="fs-18 about-text">
                                Digital marketing refers to the practice of promoting products or services
                                using digital technologies, primarily on the internet. This can include a range of techniques, such as social media marketing, 
                                search engine optimization (SEO), email marketing, pay-per-click advertising, and content marketing.
                            </p>
                            <div className="row g-4">
                                {seoData.map((card, index) => (
                                    <div key={index} className="col-md-6 col-lg-6">
                                        <SeoCard 
                                            imgSrc={card.imgSrc}
                                            altText={card.altText}
                                            title={card.title}
                                            description={card.description}
                                            aosProps={card.dataAos}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="d-none d-xl-block col-xl-1"></div>
                        <div className="col-md-12 col-lg-6 col-xl-5">
                            <div className="about-img all-img-scale">
                                <img className="img-fluid" src={seo5} alt="SEO Background" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seo;
