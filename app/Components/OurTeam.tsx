"use client"
import React from 'react';
import { motion } from 'framer-motion';

const MyTeam = () => {
  return (
    <div className="container mx-auto mt-24 p-6 text-center">
      <h1 className="text-4xl font-bold text-[#7a2536] mb-4">Our Team</h1>
      <p className="text-lg max-w-2xl mx-auto mb-12">
        Meet the passionate individuals behind our success. Each member of our team brings unique skills and expertise to drive our mission forward.
      </p>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-5xl">
          <img src="/outteam.jpg" alt="Our Team" className="w-full h-auto object-cover" />
        </div>
      </motion.div>
    </div>
  );
};

export default MyTeam;
