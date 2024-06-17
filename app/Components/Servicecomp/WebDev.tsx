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

const WebDevelopmentPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Toggle currency function
  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'INR' ? 'USD' : 'INR'));
  };

  // Service details object
  const serviceDetails: { [key: string]: ServiceDetails } = {
    WebDevelopment: {
      title: "Web Development",
      description: "Web Development involves designing and building websites using programming languages such as HTML, CSS, and JavaScript, along with frameworks and libraries.",
      keyFeatures: "Key features include responsive design, SEO optimization, and e-commerce capabilities."
    },
    Ecommerce: {
      title: "Ecommerce Solutions",
      description: "Ecommerce solutions enable businesses to sell products and services online, including website development, mobile apps, payment gateways, and inventory management.",
      keyFeatures: `Key USPs of our eCommerce solutions:
                    - Customized eCommerce platforms aligned with your brand identity and business goals
                    - Mobile-friendly, responsive designs for seamless shopping experiences across devices
                    - Multi-vendor support enabling easy onboarding, management, and collaboration with multiple sellers
                    - Robust payment gateway integrations and security measures for secure, hassle-free transactions
                    - Advanced inventory, order, and customer management tools for efficient operations
                    - Expert team with extensive knowledge of eCommerce technologies, trends, and best practices for delivering top-notch solutions.`
    },
  };

  // Pricing plans array
  const pricingPlans: PricingPlan[] = [
    {
      plan: 'Basic',
      priceINR: '₹60,000',
      priceUSD: '$800',
      description: 'Ideal for startups and small businesses with basic web development needs.',
      features: ['Basic Website Design', 'SEO Optimization', 'Responsive Design'],
      services: [serviceDetails.WebDevelopment],
      cta: 'Get Started',
    },
    {
      plan: 'Advanced',
      priceINR: '₹1,20,000',
      priceUSD: '$1600',
      description: 'Designed for growing businesses needing more advanced web solutions.',
      features: ['Custom Website Design', 'Enhanced SEO', 'E-commerce Integration'],
      services: [serviceDetails.WebDevelopment, serviceDetails.Ecommerce],
      cta: 'Upgrade Now',
    },
    {
      plan: 'Premium',
      priceINR: '₹2,00,000',
      priceUSD: '$2700',
      description: 'Suitable for large enterprises with comprehensive web development needs.',
      features: ['Full Stack Development', 'Advanced SEO', '24/7 Support'],
      services: [serviceDetails.WebDevelopment, serviceDetails.Ecommerce],
      cta: 'Join Premium',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-5">Web Development Plans</h1>
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
        {pricingPlans.map((plan, index) => (
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

export default WebDevelopmentPage;
