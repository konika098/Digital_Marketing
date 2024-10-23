import AboutBanner from './AboutBanner';
import Trust from './Trust';
import Seo from './Seo/Seo';
import Counting from '../Home/Counting/Counting';
import Service from './Service';
import Team from './Team';
import Email from '../../Components/Email';

const About = () => {
    return (
        <>
        <AboutBanner/>
        <Trust/>
        <Seo/>
        <Counting/>
        <Service/>
        <Team/>
        <Email/>
        </>
    );
};

export default About;