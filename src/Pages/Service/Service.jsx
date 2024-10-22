import React from 'react';
import ServiceBanner from './ServiceBanner/ServiceBanner';
import ServiceCards from './ServiceCards/ServiceCards';
import Choose from './Choose/Choose';
import Email from '../../Components/Email/Email';
import Pricing from './Pricing/Pricing';

const Service = () => {
    return (
       <>
       <ServiceBanner/>
       <ServiceCards/>
       <Choose/>
       <Pricing/>
       <Email/>
       </>
    );
};

export default Service;