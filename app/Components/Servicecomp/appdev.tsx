"use client"
import React, { useState } from 'react';
import PricingCard from '@/app/Components/pricingcard';

// Define TypeScript interface for service details
interface ServiceDetails {
  title: string;
  description: string;
  keyFeatures: string;
}

// Define TypeScript interface for pricing plan details
interface PricingPlan {
  plan: string;
  priceINR: string;
  priceUSD: string;
  description: string;
  features: string[];
  services: ServiceDetails[];
  cta: string;
}

// PricingCard Component
interface PricingCardProps {
  plan: string;
  priceINR: string;
  priceUSD: string;
  description: string;
  features: string[];
  services: ServiceDetails[];
  cta: string;
  currency: 'INR' | 'USD';
}

// Service details object for App Development
const appServiceDetails: { [key: string]: ServiceDetails } = {
  MobileAppDevelopment: {
    title: "Mobile App Development",
    description: "Mobile App Development involves creating software applications specifically designed to run on mobile devices such as smartphones and tablets.",
    keyFeatures: "Key features include cross-platform compatibility, user-friendly interfaces, and robust security."
  },
  UXUIDesign: {
    title: "UX/UI Design",
    description: "UX/UI Design involves creating intuitive and visually appealing interfaces for mobile applications to enhance user satisfaction.",
    keyFeatures: "Key features include user research, wireframing, prototyping, and user testing."
  },
};

// Pricing plans array for App Development
const appPricingPlans: PricingPlan[] = [
  {
    plan: 'Basic',
    priceINR: '₹70,000',
    priceUSD: '$900',
    description: 'Ideal for startups and small businesses with basic app development needs.',
    features: ['Basic App Design', 'SEO Optimization', 'Responsive Design'],
    services: [appServiceDetails.MobileAppDevelopment],
    cta: 'Get Started',
  },
  {
    plan: 'Advanced',
    priceINR: '₹1,50,000',
    priceUSD: '$2000',
    description: 'Designed for growing businesses needing more advanced app solutions.',
    features: ['Custom App Design', 'Enhanced SEO', 'E-commerce Integration'],
    services: [appServiceDetails.MobileAppDevelopment, appServiceDetails.UXUIDesign],
    cta: 'Upgrade Now',
  },
  {
    plan: 'Premium',
    priceINR: '₹2,50,000',
    priceUSD: '$3500',
    description: 'Suitable for large enterprises with comprehensive app development needs.',
    features: ['Full Stack Development', 'Advanced SEO', '24/7 Support'],
    services: [appServiceDetails.MobileAppDevelopment, appServiceDetails.UXUIDesign],
    cta: 'Join Premium',
  },
];

// App Development Page Component
const AppDevelopmentPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Toggle currency function
  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'INR' ? 'USD' : 'INR'));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-5">App Development Plans</h1>
      <div className="flex items-center mb-10">
        <span className="mr-3">Per Month</span>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only" checked={currency === 'USD'} onChange={toggleCurrency} />
          <div className="relative">
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${currency === 'USD' ? 'transform translate-x-6' : ''}`}></div>
          </div>
          <span className="ml-3 text-gray-700">{currency === 'INR' ? 'INR(₹)' : 'USD($)'}</span>
        </label>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {appPricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            priceINR={plan.priceINR}
            priceUSD={plan.priceUSD}
            description={plan.description}
            features={plan.features}
            services={plan.services}
            cta={plan.cta}
            currency={currency}
          />
        ))}
      </div>
    </div>
  );
};

export default AppDevelopmentPage;
