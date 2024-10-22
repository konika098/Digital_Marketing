import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import Trust from './Trust/Trust';
import Seo from './Seo/Seo';
import Counting from '../Home/Counting/Counting';
import Service from './Service/Service';
import Team from './Team/Team';
import Email from '../../Components/Email/Email';

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