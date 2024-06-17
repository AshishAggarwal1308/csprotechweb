import React from 'react';
import Pricing from '../Components/pricingcard';
import Contact from '../Components/Contactus';
import ServiceHero from '../Components/ServiceHero';

const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Contact />
    </div>
  );
};

export default ServiceLayout;
