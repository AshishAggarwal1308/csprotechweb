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

// Service details object for Data Analyst Services
const dataAnalystServiceDetails: { [key: string]: ServiceDetails } = {
  DataAnalysis: {
    title: "Data Analysis",
    description: "Data Analysis involves examining data sets to uncover hidden patterns, correlations, and insights.",
    keyFeatures: "Key features include data cleaning, statistical analysis, and data visualization."
  },
  DataVisualization: {
    title: "Data Visualization",
    description: "Data Visualization services involve creating graphical representations of data to communicate insights effectively.",
    keyFeatures: "Key features include interactive dashboards, charting, and infographics."
  },
};

// Pricing plans array for Data Analyst Services
const dataAnalystPricingPlans: PricingPlan[] = [
  {
    plan: 'Basic',
    priceINR: '₹50,000',
    priceUSD: '$700',
    description: 'Ideal for startups and small businesses starting with data analysis.',
    features: ['Basic Data Cleaning', 'Basic Statistical Analysis', 'Standard Reports'],
    services: [dataAnalystServiceDetails.DataAnalysis],
    cta: 'Get Started',
  },
  {
    plan: 'Advanced',
    priceINR: '₹1,20,000',
    priceUSD: '$1600',
    description: 'Designed for businesses needing more advanced data analysis solutions.',
    features: ['Advanced Data Cleaning', 'Advanced Statistical Analysis', 'Custom Reports'],
    services: [dataAnalystServiceDetails.DataAnalysis, dataAnalystServiceDetails.DataVisualization],
    cta: 'Upgrade Now',
  },
  {
    plan: 'Premium',
    priceINR: '₹2,20,000',
    priceUSD: '$3000',
    description: 'Suitable for large enterprises with comprehensive data analysis needs.',
    features: ['Full Data Analysis Suite', 'Advanced Data Visualization', '24/7 Support'],
    services: [dataAnalystServiceDetails.DataAnalysis, dataAnalystServiceDetails.DataVisualization],
    cta: 'Join Premium',
  },
];

// Data Analyst Services Page Component
const DataAnalystServicesPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Toggle currency function
  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'INR' ? 'USD' : 'INR'));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-5">Data Analyst Services Plans</h1>
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
        {dataAnalystPricingPlans.map((plan, index) => (
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

export default DataAnalystServicesPage;
