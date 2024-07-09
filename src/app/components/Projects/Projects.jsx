import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Card from "./Card";
import { motion } from "framer-motion";

const Projects = () => {
  const data = [
    {
      image: "/gaurs.png",
      link: "https://gaurfundation.vercel.app/",
      name: "GAUR'S FOUNDATION",
      para: "Gaur's Foundation is an NGO that is my own idea which connects the Rural part of India to the Urban part of India with the help of Donations (Clothes, Food, Money). The motto of the NGO is: The things that you don't need can be someone's dream."
    },
    {
      image: "/twogood.png",
      link: "https://harshitgaur2205.github.io/twogoodclone.github.in/",
      name: "TWO GOOD CLONE",
      para: "This web page is a clone of an award-winning website and also contains some of my additional features. This project challenged me with new ways of adding animations and designs in a website using pure CSS, HTML, and JavaScript."
    },
    {
      image: "/duofinal.png",
      link: "https://harshitgaur2205.github.io/project-2.github.in/",
      name: "DUO STUDIO CLONE",
      para: "This web page is a clone of an award-winning website and also contains some of my additional features. This project challenged me with new ways of adding animations and designs in a website using pure CSS, HTML, and JavaScript."
    }
  ];

  return (
    <div className="project relative min-h-screen" id="project">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative z-10 mx-auto w-[85%] py-12"
      >
        {data.map((x, index) => (
          <Card key={index} heading={x.name} detail={x.para} image={x.image} link={x.link} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
