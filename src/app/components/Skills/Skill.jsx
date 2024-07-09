"use client";
import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMotionTemplate } from "framer-motion";
import { useMotionValue } from "framer-motion";
import { animate } from "framer-motion";
import { motion } from "framer-motion";
import BubbleText from "./BubbleText";
import { DivOrigami } from "./LogoOrigami";
import { Example } from "./ClipPathLinks";

const Skill = () => {
  return (
    <div className="skill h-[100vh] w-[100vw]  flex flex-col items-center justify-center relative">
      <div className=" canva absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <div className="flex items-center gap-[40px]">
        <BubbleText />
        <DivOrigami />
      </div>
      {/* <Example /> */}

    </div>
  );
};

export default Skill;
