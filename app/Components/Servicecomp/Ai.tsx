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

// Service details object for AI Services
const aiServiceDetails: { [key: string]: ServiceDetails } = {
  MachineLearning: {
    title: "Machine Learning",
    description: "Machine Learning services involve creating models that learn from data and make predictions or decisions.",
    keyFeatures: "Key features include supervised learning, unsupervised learning, and reinforcement learning."
  },
  NaturalLanguageProcessing: {
    title: "Natural Language Processing",
    description: "Natural Language Processing (NLP) services involve understanding and processing human language data.",
    keyFeatures: "Key features include text analysis, sentiment analysis, and language translation."
  },
};

// Pricing plans array for AI Services
const aiPricingPlans: PricingPlan[] = [
  {
    plan: 'Basic',
    priceINR: '₹80,000',
    priceUSD: '$1000',
    description: 'Ideal for startups and small businesses starting with AI solutions.',
    features: ['Basic ML Models', 'Data Preprocessing', 'Basic Support'],
    services: [aiServiceDetails.MachineLearning],
    cta: 'Get Started',
  },
  {
    plan: 'Advanced',
    priceINR: '₹1,60,000',
    priceUSD: '$2200',
    description: 'Designed for businesses needing more advanced AI solutions.',
    features: ['Advanced ML Models', 'NLP Integration', '24/7 Support'],
    services: [aiServiceDetails.MachineLearning, aiServiceDetails.NaturalLanguageProcessing],
    cta: 'Upgrade Now',
  },
  {
    plan: 'Premium',
    priceINR: '₹3,00,000',
    priceUSD: '$4000',
    description: 'Suitable for large enterprises with comprehensive AI needs.',
    features: ['Full AI Suite', 'Custom Model Development', 'Priority Support'],
    services: [aiServiceDetails.MachineLearning, aiServiceDetails.NaturalLanguageProcessing],
    cta: 'Join Premium',
  },
];

// AI Services Page Component
const AIServicesPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Toggle currency function
  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'INR' ? 'USD' : 'INR'));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-5">AI Services Plans</h1>
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
        {aiPricingPlans.map((plan, index) => (
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

export default AIServicesPage;
