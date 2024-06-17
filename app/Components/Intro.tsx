"use client"
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function AboutCompany() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="py-16  px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Company Title */}
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-[#7a2536]">
            Web Design, App Development And Digital Marketing Company In Delhi
          </h1>

          {/* Company Introduction */}
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Cs Pro Technology, established in 2024, is a visionary company dedicated to providing cutting-edge enterprise solutions such as ERP, CRM, and factory automation software to drive business growth and enhance operational efficiency.
          </p>


          {/* Call to Action */}
          <div className="flex justify-center">
            <Link href="/About">
            <button className="bg-[#7a2536] hover:bg-[#5e1d2b] text-white py-2 px-4 rounded-lg">
              Learn More About Us
            </button>
            </Link>
          
          </div>
        </motion.div>
      </div>
    </div>
  );
}
