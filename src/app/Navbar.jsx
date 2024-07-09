"use client"
import React, { useState, useEffect } from 'react';
import Slidetabs from "./components/Navbar/SlideTabs";
import BubbleText from './components/Navbar/BubbleText/BubbleText';
import SlideInNotifications from './components/Main/SlideInNotifications';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div className="navbar"     >
      <BubbleText />
      <Slidetabs />
      <SlideInNotifications />
    </motion.div>
  );
}

export default Navbar;
