import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Define prop types using TypeScript interfaces
interface PricingCardProps {
  plan: string;
  priceINR: string;
  priceUSD: string;
  description: string;
  features: string[];
  services: {
    title: string;
    description: string;
    keyFeatures: string;
  }[];
  cta: string;
  currency: 'INR' | 'USD'; // Assuming currency can only be 'INR' or 'USD'
}

// Component definition
const PricingCard: React.FC<PricingCardProps> = ({ plan, priceINR, priceUSD, description, features, services, cta, currency }) => {
  const cardRef = useRef<HTMLDivElement>(null); // useRef with explicit HTMLDivElement type

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  const price = currency === 'INR' ? priceINR : priceUSD;

  return (
    <div ref={cardRef} className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 transform transition duration-500 hover:scale-105 sm:w-80 md:w-96">
      <h2 className="text-center text-2xl font-semibold" style={{ color: '#7a2536' }}>{plan}</h2>
      <p className="text-center text-xl font-bold">{price}</p>
      <p className="text-center text-gray-700">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700">
            {feature}
          </li>
        ))}
      </ul>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-md">
            <h3 className="font-semibold">{service.title}</h3>
            <p>{service.description}</p>
            <p className="text-sm text-gray-600">{service.keyFeatures}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-[#7a2536] text-white px-4 py-2 rounded-full hover:bg-[#5a1b2b] transition duration-300">
          {cta}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
