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

// Service details object for Cybersecurity Services
const cyberSecurityServiceDetails: { [key: string]: ServiceDetails } = {
  ThreatDetection: {
    title: "Threat Detection",
    description: "Threat Detection involves identifying and responding to potential cybersecurity threats in real time.",
    keyFeatures: "Key features include real-time monitoring, automated alerts, and incident response."
  },
  VulnerabilityAssessment: {
    title: "Vulnerability Assessment",
    description: "Vulnerability Assessment involves identifying and mitigating security weaknesses in systems and networks.",
    keyFeatures: "Key features include regular security audits, penetration testing, and risk assessment."
  },
};

// Pricing plans array for Cybersecurity Services
const cyberSecurityPricingPlans: PricingPlan[] = [
  {
    plan: 'Basic',
    priceINR: '₹60,000',
    priceUSD: '$800',
    description: 'Ideal for startups and small businesses starting with cybersecurity measures.',
    features: ['Basic Threat Detection', 'Regular Security Audits', 'Standard Reports'],
    services: [cyberSecurityServiceDetails.ThreatDetection],
    cta: 'Get Started',
  },
  {
    plan: 'Advanced',
    priceINR: '₹1,40,000',
    priceUSD: '$1900',
    description: 'Designed for businesses needing more advanced cybersecurity solutions.',
    features: ['Advanced Threat Detection', 'Comprehensive Security Audits', 'Custom Reports'],
    services: [cyberSecurityServiceDetails.ThreatDetection, cyberSecurityServiceDetails.VulnerabilityAssessment],
    cta: 'Upgrade Now',
  },
  {
    plan: 'Premium',
    priceINR: '₹2,40,000',
    priceUSD: '$3200',
    description: 'Suitable for large enterprises with comprehensive cybersecurity needs.',
    features: ['Full Cybersecurity Suite', 'Advanced Vulnerability Assessment', '24/7 Support'],
    services: [cyberSecurityServiceDetails.ThreatDetection, cyberSecurityServiceDetails.VulnerabilityAssessment],
    cta: 'Join Premium',
  },
];

// Cybersecurity Services Page Component
const CyberSecurityServicesPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Toggle currency function
  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'INR' ? 'USD' : 'INR'));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-5">Cybersecurity Services Plans</h1>
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
        {cyberSecurityPricingPlans.map((plan, index) => (
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

export default CyberSecurityServicesPage;
