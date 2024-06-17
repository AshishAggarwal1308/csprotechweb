"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const Custom404 = () => {
  useEffect(() => {
    gsap.from('.error-page-content', {
      opacity: 0,
      y: 50,
      duration: 1,
    });
  }, []);

  return (
    <div className="error-page flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-32">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-800 mb-8 text-center">Oops! The page you are looking for does not exist.</p>
       
      <p className="mt-4">
        <Link href="/">
           Go back to Home
        </Link>
      </p>
    </div>
  );
};

export default Custom404;
