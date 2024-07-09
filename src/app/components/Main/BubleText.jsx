"use client";
import React from "react";
import styles from "./bubble.module.css";
import { motion } from "framer-motion";

const BubbleText = () => {
  return (
    <div className="header">
      <span className=" inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
        MY NAME IS
      </span>
      <div>
        <motion.h2
          className="harshit text-center text-[10vw] font-thin text-indigo-300 w-[80vw] h-[fit-content]"
        >
          {"HARSHIT GAUR".split("").map((child, idx) => (
            <span className={styles.hoverText} key={idx}>
              {child}
            </span>
          ))}
        </motion.h2>
        
      </div>
    </div>
  );
};

export default BubbleText;
