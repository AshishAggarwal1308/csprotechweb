"use client";
import Hero from "@/app/Components/Hero";
import Intro from "@/app/Components/Intro";
import ServiceDetails from "./Components/Services";
import Expertise from "./Components/Experise";
import Workflows from "./Components/Workflows";
import Contact from "./Components/Contactus";
import GlobalDemo from "./Components/WeService";
import InfiniteMovingCardsDemo from "./Components/OurClients";
import FAQSection from "./Components/Faq";
import Map from "./Components/Map";

export default function Page() {

  return (
    <div>
      <Hero />
      <Intro />
      <ServiceDetails />
      <Expertise />
      <Workflows />
      {/* <GlobalDemo /> */}
      <InfiniteMovingCardsDemo />
      <FAQSection />
      <Map />
    </div>
  );
}
