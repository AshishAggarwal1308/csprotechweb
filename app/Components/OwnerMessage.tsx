"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const CompanyFounders = () => {
  const founder1Ref = useRef<HTMLDivElement>(null);
  const founder2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations for founder 1
    gsap.fromTo(
      founder1Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: founder1Ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false, // Set to true for debugging
        },
      }
    );

    // Initialize GSAP animations for founder 2
    gsap.fromTo(
      founder2Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: founder2Ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false, // Set to true for debugging
        },
      }
    );
  }, []);

  return (
    <div className="container max-w-7xl mx-auto mt-24 p-6">
      <div className="space-y-24">
        {/* Founder 1 */}
        <div ref={founder1Ref} className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <motion.img
              src="/founder1.jpg" // Replace with actual image path
              alt="Founder 1"
              className="rounded-full h-40 w-40 lg:h-64 lg:w-64 object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl  text-[#7a2536]  font-bold mb-4">Mr Raushan rao</h2>
              <p className="text-lg max-w-md mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis
                mattis tortor, sit amet suscipit metus malesuada in.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Founder 2 */}
        <div ref={founder2Ref} className="flex flex-col lg:flex-row-reverse items-center lg:space-x-12">
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <motion.img
              src="/founder2.jpg" 
              alt="Founder 2"
              className="rounded-full h-40 w-40 lg:h-64 lg:w-64 object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="lg:w-2/3 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold mb-4  text-[#7a2536]  ">mrs Ramlata</h2>
              <p className="text-lg max-w-md mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis
                mattis tortor, sit amet suscipit metus malesuada in.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFounders;
