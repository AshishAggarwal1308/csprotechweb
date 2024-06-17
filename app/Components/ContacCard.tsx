"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

const ContactCards = () => {
    const addressRef = useRef<HTMLDivElement>(null);
    const emailRef = useRef<HTMLDivElement>(null);
    const phoneRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      // Animation for Address Card
      gsap.fromTo(
        addressRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: addressRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
            markers: false, // Set to true for debugging
          },
        }
      );
  
      // Animation for Email Card
      gsap.fromTo(
        emailRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: emailRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
            markers: false, // Set to true for debugging
          },
        }
      );
  
      // Animation for Phone Card
      gsap.fromTo(
        phoneRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: phoneRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
            markers: false, // Set to true for debugging
          },
        }
      );
    }, []);
  
    return (
      <div className="container mx-auto mt-24 p-6">
        <div className="flex flex-col md:flex-row justify-center md:space-x-8">
          {/* Card 1: Address */}
          <motion.div
            ref={addressRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-lg rounded-lg flex-1 p-6"
          >
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#7a2536]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 015.657 2.343l1.415-1.414a1 1 0 111.414 1.414l-1.416 1.414A8 8 0 0118 10c0 4.418-3.582 8-8 8s-8-3.582-8-8a8 8 0 012.343-5.656l1.414-1.414A1 1 0 016 5.757l-1.414 1.415A8 8 0 0110 2zm1 4a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1zm0 8a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-xl font-bold">Address</h2>
            </div>
            <p className="text-lg">
              1234 Main Street <br />
              City, State ZIP <br />
              Country
            </p>
          </motion.div>
  
          {/* Card 2: Email */}
          <motion.div
            ref={emailRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-lg rounded-lg flex-1 p-6 mt-6 md:mt-0"
          >
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#7a2536]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 4a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4zM8.47 10.687a1.5 1.5 0 102.06 0l2.89-2.89a1 1 0 10-1.41-1.41L10 8.875l-1.06-1.06a1 1 0 10-1.41 1.41l2.89 2.89zM16 5l-4 3.5L8 5H16z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-xl font-bold">Email</h2>
            </div>
            <p className="text-lg">info@example.com</p>
          </motion.div>
  
          {/* Card 3: Phone Number */}
          <motion.div
            ref={phoneRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-lg rounded-lg flex-1 p-6 mt-6 md:mt-0"
          >
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#7a2536]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 015.657 2.343l1.415-1.414a1 1 0 111.414 1.414l-1.416 1.414A8 8 0 0118 10c0 4.418-3.582 8-8 8s-8-3.582-8-8a8 8 0 012.343-5.656l1.414-1.414A1 1 0 016 5.757l-1.414 1.415A8 8 0 0110 2zm1 4a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1zm0 8a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-xl font-bold">Phone Number</h2>
            </div>
            <p className="text-lg">+1 234 567 890</p>
          </motion.div>
        </div>
      </div>
    );
  };
  export default ContactCards