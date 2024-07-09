"use client"
import React from "react";
import  { useRef} from "react";
import { motion } from "framer-motion";
import { useState } from 'react'
import Link from "next/link";


const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  
  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex w-fit rounded-full border-2 border-color: rgb(82 82 91) bg-white p-1"
    >
      <Tab setPosition={setPosition}><Link href="/">Home</Link></Tab>
      <Tab setPosition={setPosition}><Link href="#about">About Me</Link></Tab>
      <Tab setPosition={setPosition}><Link href="#project">Projects</Link></Tab>
      <Tab setPosition={setPosition}><Link href="#contact">Contact</Link></Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default SlideTabs