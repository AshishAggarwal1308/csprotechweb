"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const ContactIntro = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundRef.current || !textRef.current) return;

    gsap.to(backgroundRef.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="relative pt-8 overflow-hidden mt-16">
      <div
        ref={backgroundRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/contact.jpg)' }}
      ></div>
      
      {/* Overlay with animated text */}
      <div className="relative z-10 flex items-center justify-center bg-black bg-opacity-50 p-4 h-full">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white max-w-screen-lg mx-auto"
        >
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">Welcome to Our Company</h1>
          <p className="text-xs md:text-sm lg:text-lg mb-8 max-w-2xl mx-auto">
            We are committed to delivering excellence in every project we undertake. Here are some of our achievements:
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <h2 className="text-xs md:text-xl lg:text-3xl font-bold">120+</h2>
              <p className="text-xs md:text-sm lg:text-xl">Projects Delivered</p>
            </div>
            <div className="text-center">
              <h2 className="text-xs md:text-xl lg:text-3xl font-bold">50+</h2>
              <p className="text-xs md:text-sm lg:text-xl">Happy Clients</p>
            </div>
            <div className="text-center">
              <h2 className="text-xs md:text-xl lg:text-3xl font-bold">10+</h2>
              <p className="text-xs md:text-sm lg:text-xl">Years of Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactIntro;
