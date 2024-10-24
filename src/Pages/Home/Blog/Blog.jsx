import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Slider from "../../Home/Blog/Slider"

const Blog = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,
        });
    }, []);

    return (
        <div className="blog-section">
            <div className="container">
                <div className="testimonial-area">
                    <div className="test-sub">
                        <span className="fs-18 about-sub">Blog</span>
                    </div>
                    <h3 className="fs-52-c text-center" style={{ margin: '30px 0' }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false">
                        Make Your Marketing <br className="d-none d-md-block" />
                        More Effective
                    </h3>

                    <div className="blog-slider-class">
                        <Slider/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
