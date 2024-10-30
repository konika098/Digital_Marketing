import { Link } from "react-router-dom";

const ServiceBanner = () => {
    return (
        <div className="service-integrate-section">
            <div className="container">
                <div className="service-integrate-area integrate-aside">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-xl-4">
                            <span className="fs-18 integrate-sub">Our Services</span>
                            <h3 className="fs-52-c integrate-title">Integrated digital marketing</h3>
                            <p className="fs-18 integrate-text">
                                Your digital marketing should be integrated and joined up. In order to get more results
                                for you, we make sure all your digital marketing channels are integrated together.
                            </p>
                            <Link href="/contact" className="btn btn-success dark dark-2">Contact Us</Link>
                        </div>
                        <div className="col-lg-1 col-xl-1"></div>
                        <div className="col-lg-6 col-xl-7">
                            <div className="integrate-img">
                                <img className="img-fluid" src="https://i.postimg.cc/vBqY46Wq/service-bg.png" alt="Integrated Digital Marketing" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;
