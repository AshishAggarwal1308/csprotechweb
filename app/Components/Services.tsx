"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetail {
  title: string;
  description: string;
  keyFeatures: string;
  link: string;
}

const serviceDetails: Record<string, ServiceDetail> = {
  AppDevelopment: {
    title: "App Development",
    description: "App Development involves creating software applications specifically designed to run on mobile devices such as smartphones and tablets.",
    keyFeatures: "Key features include cross-platform compatibility, user-friendly interfaces, and robust security.",
    link: "/appdevelopment"
  },
  WebDevelopment: {
    title: "Web Development",
    description: "Web Development involves designing and building websites using programming languages such as HTML, CSS, and JavaScript, along with frameworks and libraries.",
    keyFeatures: "Key features include responsive design, SEO optimization, and e-commerce capabilities.",
    link: "/webdevelopment"
  },
  AI: {
    title: "Artificial Intelligence (AI)",
    description: "Artificial Intelligence (AI) technologies enable computers to learn from data and perform tasks that typically require human intelligence.",
    keyFeatures: "Key features include machine learning algorithms, natural language processing, and computer vision.",
    link: "/Ai"
  },
  CloudComputing: {
    title: "Cloud Computing",
    description: "Cloud Computing involves delivering computing services such as servers, storage, databases, networking, software, and analytics over the Internet (the cloud).",
    keyFeatures: "Key features include scalability, flexibility, cost-efficiency, and security enhancements.",
    link: "/cloudcomputing"
  },
  ITConsulting: {
    title: "IT Consulting",
    description: "IT Consulting provides strategic advisory services to businesses to help them optimize their IT infrastructure, operations, and processes.",
    keyFeatures: "Key features include strategic planning, system integration, cybersecurity consulting, and digital transformation.",
    link: "/counsulting"
  },
  DataAnalysis: {
    title: "Data Analysis",
    description: "Data Analysis involves examining raw data with the purpose of drawing conclusions about that information.",
    keyFeatures: "Key features include data visualization, statistical analysis, predictive modeling, and business intelligence.",
    link: "/dataanalytics"
  },
};

const ServiceDetails: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('AppDevelopment');

  const showDetails = (service: string) => {
    setSelectedService(service);
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-start mt-8">
      <div className="w-full md:w-1/4 p-4 bg-[#000000d6] rounded-l-xl mb-8 md:mb-0 md:mr-4">
        <ul>
          {Object.keys(serviceDetails).map(service => (
            <li key={service} className="mb-4 w-full text-2xl font-bold cursor-pointer">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full text-left px-2 py-1 ${
                  selectedService === service ? 'bg-[#7a2536] text-white shadow-lg lg:ml-10 w-full p-2' : 'text-white text-[15px]'
                }`}
                onClick={() => showDetails(service)}
              >
                {serviceDetails[service].title}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-1/2 p-4 bg-white">
        <AnimatePresence>
          {selectedService && (
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-lg font-semibold mb-4">{serviceDetails[selectedService].title}</h2>
              <p className="mb-4">{serviceDetails[selectedService].description}</p>
              <p className="mb-4">{serviceDetails[selectedService].keyFeatures}</p>
              <a href={serviceDetails[selectedService].link} className="bg-[#7a2536] text-white py-2 px-4 inline-block mt-2">Read More</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ServiceDetails;
