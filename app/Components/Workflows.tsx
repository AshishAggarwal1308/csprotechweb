"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaBook,
  FaTools,
  FaShoppingCart,
  FaHotel,
  FaTruck,
  FaIndustry,
  FaMoneyCheck,
  FaHeartbeat,
  FaBuilding,
  FaCode,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  { icon: <FaBook />, title: 'ED Tech' },
  { icon: <FaTools />, title: 'CRM and ERP Systems' },
  { icon: <FaShoppingCart />, title: 'E-Commerce' },
  { icon: <FaHotel />, title: 'Travel and Hospitality' },
  { icon: <FaTruck />, title: 'Logistics and SCM' },
  { icon: <FaIndustry />, title: 'Manufacturing' },
  { icon: <FaMoneyCheck />, title: 'Fintech' },
  { icon: <FaHeartbeat />, title: 'Healthcare' },
  { icon: <FaBuilding />, title: 'Real Estate' },
  { icon: <FaCode />, title: 'Custom Portal Software' },
];

const Workflows = () => {
  useEffect(() => {
    gsap.fromTo(
      '.solution-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.solution-card',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4 pt-16"> {/* Added pt-16 to avoid overlap with fixed navbar */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Solutions <span className="text-[#7a2536]">We Deliver</span>
      </h1>
      <p className="text-center mb-8">
        The company provides solutions to enterprises and services through a combination of traditional.
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="solution-card bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center relative z-1 transition-all duration-300 hover:cursor-pointer hover:bg-[#7a2536] hover:text-white group"
          >
            <div className="text-4xl text-[#7a2536] mb-4 transition-all duration-300 group-hover:text-white">
              {solution.icon}
            </div>
            <div className="lg:text-xl md:text-sm text-xs font-semibold">{solution.title}</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#7a2536] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflows;
