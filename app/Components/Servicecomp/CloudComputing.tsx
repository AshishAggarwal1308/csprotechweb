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

// Service details object for Cloud Computing
const cloudServiceDetails: { [key: string]: ServiceDetails } = {
  CloudInfrastructure: {
    title: "Cloud Infrastructure",
    description: "Cloud Infrastructure services include computing resources, storage, and networking capabilities hosted on the cloud.",
    keyFeatures: "Key features include scalability, reliability, and security."
  },
  CloudMigration: {
    title: "Cloud Migration",
    description: "Cloud Migration services help businesses move their existing applications and data to the cloud.",
    keyFeatures: "Key features include data transfer, application migration, and minimal downtime."
  },
};

// Pricing plans array for Cloud Computing
const cloudPricingPlans: PricingPlan[] = [
  {
    plan: 'Basic',
    priceINR: '₹50,000',
    priceUSD: '$700',
    description: 'Suitable for small businesses and startups starting with cloud services.',
    features: ['Basic Cloud Setup', 'Limited Support', 'Basic Security'],
    services: [cloudServiceDetails.CloudInfrastructure],
    cta: 'Get Started',
  },
  {
    plan: 'Advanced',
    priceINR: '₹1,00,000',
    priceUSD: '$1300',
    description: 'Ideal for businesses needing advanced cloud solutions and support.',
    features: ['Advanced Cloud Setup', '24/7 Support', 'Enhanced Security'],
    services: [cloudServiceDetails.CloudInfrastructure, cloudServiceDetails.CloudMigration],
    cta: 'Upgrade Now',
  },
  {
    plan: 'Premium',
    priceINR: '₹2,00,000',
    priceUSD: '$2500',
    description: 'Designed for large enterprises requiring comprehensive cloud services.',
    features: ['Full Cloud Infrastructure', 'Priority Support', 'Maximum Security'],
    services: [cloudServiceDetails.CloudInfrastructure, cloudServiceDetails.CloudMigration],
    cta: 'Join Premium',
  },
];

// Cloud Computing Page Component
const CloudComputingPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Toggle currency function
  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'INR' ? 'USD' : 'INR'));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-5">Cloud Computing Plans</h1>
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
        {cloudPricingPlans.map((plan, index) => (
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

export default CloudComputingPage;
