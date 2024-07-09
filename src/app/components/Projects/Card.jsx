"use client";
import React from "react";
import Example from "./TiltCard";
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="project-cards relative flex w-full items-center p-8 gap-8"
    >
      <Example image={props.image} title={props.heading} link={props.link} />
      <div className="project-heading flex flex-col items-center">
        <h1 className="w-full text-4xl font-bold text-indigo-600">
          {props.heading}
        </h1>
        <p className="w-full text-lg text-[#a19bb1]">{props.detail}</p>
      </div>
    </motion.div>
  );
};

export default Card;
