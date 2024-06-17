import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  return (
    <div
      className={`mt-20 flex flex-col items-center justify-center text-center relative w-full h-[75vh] bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold hero-text pt-20">{title}</h1>
        <p className="mt-4 text-lg hero-text max-w-[75%] mx-auto">{subtitle}</p>
        <motion.button
          className="hero-button mt-6 bg-[#AD1E3A] text-white py-2 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-brand-light transform hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={buttonLink}>
            {buttonText}
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default ServiceHero;
