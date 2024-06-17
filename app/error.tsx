"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';

const CustomError = ({ statusCode }: { statusCode: number }) => {
  const router = useRouter();

  useEffect(() => {
    gsap.from('.error-page-content', {
      opacity: 0,
      y: 50,
      duration: 1,
    });
  }, []);

  return (
    <div className="error-page flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
   
      <p className="mt-4">
        <Link href="/">
        Error occured go Back to home
        </Link>
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
};

CustomError.getInitialProps = ({ res, err }: { res: any, err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
