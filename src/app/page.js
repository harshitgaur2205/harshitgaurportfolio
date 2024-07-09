"use client"
import React from "react";
import Navbar from "./Navbar";
import AuroraHero from "./components/Main/Hero"
import About from "./components/About Us/About";
import { Contact } from "./components/Contact Us/Contact";
import Projects from "./components/Projects/Projects";
import MarqueeAbout from "./components/About Us/MarqueeAbout";
import Marquee from "./components/Marquee/Marquee";
import MarqueeContact from "./components/Contact Us/MarqueeContact";

const page = () => {
  return (
    <div className="app relative">
      <Navbar />             
      <AuroraHero />
      <MarqueeAbout />
      <About />
      <Marquee />
      <Projects />
      <MarqueeContact />
      <Contact />
    </div>
  );
};

export default page;
