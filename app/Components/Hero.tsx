import React from "react";
import Hero from "@/public/Hero.jpg"; // Ensure this is the correct path to your image
import Link from "next/link";

export default function Page() {
  return (
    <div
      className="flex items-center justify-center w-[98.9vw] lg:h-[94vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Hero.src})` }}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-center w-screen relative pt-32 z-20 px-4">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
          Custom-made IT Solutions <br /> To Meet Your Business Needs
        </h1>
        <p className="text-lg md:text-xl  text-brand dark:text-gray-300 mb-8 mx-auto ">
          Innovative IT solutions provider offering scalable, secure, and cutting-edge technology services.<br/> Specializing in cloud computing, AI, and cybersecurity.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href={"/webdevelopment"}>
          <button className="bg-brand hover:bg-brand-light text-white py-2 px-4 rounded-lg">
            Explore Services
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
