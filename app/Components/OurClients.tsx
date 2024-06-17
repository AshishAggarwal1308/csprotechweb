"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/app/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The team at TechSolutions transformed our outdated IT infrastructure into a robust, cloud-based system. Their expertise and dedication have been instrumental in our company's growth and efficiency.",
    name: "Rajesh Kumar",
    title: "CEO, InnovateTech",
    photo: "/avatar.jpg"
  },
  {
    quote:
      "TechSolutions' cybersecurity services have given us peace of mind. Their proactive approach and quick response times have significantly reduced our vulnerability to cyber threats.",
    name: "Anita Sharma",
    title: "IT Director, SecureCorp",
    photo: "/avatar.jpg"
  },
  {
    quote:
      "The custom software developed by TechSolutions has streamlined our operations and increased our productivity. Their ability to understand our needs and deliver a tailored solution was impressive.",
    name: "David Lee",
    title: "Operations Manager, FlowWorks",
    photo:"/avatar.jpg"
  },
  {
    quote:
      "Working with TechSolutions on our AI project was a game-changer. Their innovative solutions and deep understanding of AI technology have helped us stay ahead of the competition.",
    name: "Emily Davis",
    title: "Chief Data Officer, FutureTech",
    photo: "/avatar.jpg"
  },
  {
    quote:
      "TechSolutions' cloud migration services were seamless and efficient. They managed the entire process with minimal disruption to our business, and the benefits we've seen since migrating are incredible.",
    name: "Michael Brown",
    title: "CIO, GlobalEnterprises",
    photo: "/avatar.jpg"
  },
  {
    quote:
      "TechSolutions provided excellent support during our digital transformation. Their team's in-depth knowledge and dedication ensured that our transition was smooth and successful.",
    name: "Priya Mehta",
    title: "CTO, DigitalWave",
    photo:"/avatar.jpg"
  },
  {
    quote:
      "The ERP system implemented by TechSolutions has greatly improved our business processes. Their professional approach and technical expertise made the project a success.",
    name: "Amit Patel",
    title: "Head of IT, BharatIndustries",
    photo: "/avatar.jpg"
  },
];
