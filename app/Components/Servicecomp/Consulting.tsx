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

// Service details object for IT Consulting Services
const itConsultingServiceDetails: { [key: string]: ServiceDetails } = {
  StrategicPlanning: {
    title: "Strategic Planning",
    description: "Strategic Planning involves developing long-term strategies to align IT initiatives with business goals.",
    keyFeatures: "Key features include SWOT analysis, IT roadmap development, and business process optimization."
  },
  SystemIntegration: {
    title: "System Integration",
    description: "System Integration involves integrating various IT systems to work together seamlessly.",
    keyFeatures: "Key features include API integration, data migration, and interoperability testing."
  },
};

// Pricing plans array for IT Consulting Services
const itConsultingPricingPlans: PricingPlan[] = [
  {
    plan: 'Basic',
    priceINR: '₹80,000',
    priceUSD: '$1000',
    description: 'Ideal for startups and small businesses needing basic IT consulting services.',
    features: ['Strategic IT Planning', 'System Analysis', 'Process Optimization'],
    services: [itConsultingServiceDetails.StrategicPlanning],
    cta: 'Get Started',
  },
  {
    plan: 'Advanced',
    priceINR: '₹1,60,000',
    priceUSD: '$2200',
    description: 'Designed for mid-sized businesses requiring comprehensive IT consulting solutions.',
    features: ['Custom IT Strategy', 'System Integration', 'Technical Support'],
    services: [itConsultingServiceDetails.StrategicPlanning, itConsultingServiceDetails.SystemIntegration],
    cta: 'Upgrade Now',
  },
  {
    plan: 'Premium',
    priceINR: '₹3,00,000',
    priceUSD: '$4000',
    description: 'Tailored for large enterprises with complex IT infrastructure and strategic needs.',
    features: ['Enterprise IT Solutions', 'Full System Integration', '24/7 Support'],
    services: [itConsultingServiceDetails.StrategicPlanning, itConsultingServiceDetails.SystemIntegration],
    cta: 'Join Premium',
  },
];

// IT Consulting Services Page Component
const ITConsultingServicesPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Toggle currency function
  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'INR' ? 'USD' : 'INR'));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-5">IT Consulting Services Plans</h1>
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
        {itConsultingPricingPlans.map((plan, index) => (
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

export default ITConsultingServicesPage;
