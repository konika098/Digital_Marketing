
import Banner from './Banner/Banner';
import Service from './Service/Service';
import About from './About';
import Counting from './Counting/Counting';
import Choose from './Choose/Choose';
import Marketing from './Marketing/Marketing';
import Testimonial from './Testimonial/Testimonial';
import Blog from './Blog/Blog';
import Email from '../../Components/Email';

const Home = () => {
    return (
        <>
            <Banner />
            <Service />
            <About />
            <Counting />
            <Choose />
            <Marketing />
            <Testimonial />
            <Blog />
            <Email />
        </>
    );
};

export default Home;