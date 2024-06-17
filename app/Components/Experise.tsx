"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Expertise = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const listItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-between mt-20 max-w-[85rem] mx-auto px-4 md:px-12 z-0" ref={ref}>
      <motion.div
        className="md:w-2/5 lg:w-1/2"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } }
        }}
      >
        <h1 className="text-4xl font-bold text-black">
          Where Your Imagination 
          <span className="text-[#7a2536]"> Meets Our Expertise.</span>
        </h1>
        <p className="text-lg mt-8 mb-8">
          CS Pro Technology provides a full range of mobile app and web app development services,
          covering every stage from initial ideation to post-development customer support.
          Whatever your needs are in the realm of mobile app development...
        </p>
        <ul className="list-disc list-inside mt-6 space-y-2 text-gray-800">
          <div className="md:flex">
            <div className="md:w-1/2">
              <motion.li variants={listItemVariants} whileHover={{ scale: 1.1 }}>Requirement Analysis and Gathering</motion.li>
              <motion.li variants={listItemVariants} whileHover={{ scale: 1.1 }}>Architecture and Design</motion.li>
              <motion.li variants={listItemVariants} whileHover={{ scale: 1.1 }}>UI/UX Design and Wireframing</motion.li>
              <motion.li variants={listItemVariants} whileHover={{ scale: 1.1 }}>Coding and Development</motion.li>
              <motion.li variants={listItemVariants} whileHover={{ scale: 1.1 }}>Integration with Backend Systems</motion.li>
            </div>
            <div className="md:w-1/2">
              <motion.li variants={listItemVariants} whileHover={{ scale: 1.1 }}>Quality Assurance and Testing</motion.li>
              <motion.li variants={listItemVariants} whileHover={{ scale: 1.1 }}>Deployment and Release Management</motion.li>
              <motion.li variants={listItemVariants} whileHover={{ scale: 1.1 }}>Post-Release Maintenance and Support</motion.li>
              <motion.li variants={listItemVariants} whileHover={{ scale: 1.1 }}>Continuous Improvement and Enhancements</motion.li>
            </div>
          </div>
        </ul>
      </motion.div>
      <motion.div
        className="md:w-1/3 lg:w-1/2 mt-8 md:mt-0 flex justify-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } }
        }}
      >
        <img
          src="https://ebslon.com/static/media/how_it_work_img.0eb3bd8dc1045a637973.webp"
          alt="Mobile app and web app development"
          className="max-w-full h-96"
        />
      </motion.div>
    </div>
  );
};

export default Expertise;
