import React from 'react';
import ServiceDetailsBanner from './ServiceBanner/ServiceDetailsBanner';
import Counting from './Counting/Counting';
import Specialize from './Specialize/Specialize';
import Digital from './Digital/Digital';
import Help from './Help/Help';
import Email from '../Home/Email/Email';

const ServiceDetails = () => {
    return (
        <>
        <ServiceDetailsBanner/>
        <Counting/>
        <Specialize/>
        <Digital/>
        <Help/>
        <Email/>
        </>
    );
};

export default ServiceDetails;