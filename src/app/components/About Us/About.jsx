"use client";
import React, { useEffect, useState } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TypeWriiter from "./TypeWriiter";
import DragCloseDrawerExample from "./DragCloseDrawerExample";
import { useMotionTemplate, useMotionValue, animate, motion } from "framer-motion";

const About = () => {
  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 10% 48%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 4px ${color}`;

  return (
    <motion.div
      id="about"
      className="relative about h-[100vh] w-[100vw] bg-black-900 flex flex-col items-center justify-center relative"
    >
      <div className="canva absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>

      <motion.h1
        initial={{ y: -200 , opacity:0 }}
        whileInView={{ y: 0 , opacity:1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, type: "spring" , stiffness:100 }}
        id="about-heading"
        className="about-txt text-[4.5vw] font-black text-slate-500 shadow-[900px]"
      >
        KNOW MORE ABOUT ME 
      </motion.h1>
      <motion.div
        initial={{ y: -50 , opacity: 0 }}
        whileInView={{ y: 0 , opacity:1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay:0.5, type: "spring" ,stiffness:200 }}
      >
        <TypeWriiter />
      </motion.div>
      <br />
      <motion.div
        initial={{ opacity: 0,  y: -50 }}
        whileInView={{ opacity: 1,  y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1, type: "spring" , stiffness:300 }}
        className="relative z-10"
      >
        <DragCloseDrawerExample />
      </motion.div>
    </motion.div>
  );
};

export default About;
