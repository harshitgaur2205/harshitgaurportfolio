"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPowerbi } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";


export const DivOrigami = () => {
  return (
    <section className="skills-logo flex h-[30px] flex-col items-center justify-center gap-12  px-4 py-24 md:flex-row">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-orange-300 text-neutral-900">
            <FaHtml5 />
          </LogoItem>,
          <LogoItem key={2} className="bg-green-300 text-neutral-900">
            <IoLogoJavascript />
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-300 text-neutral-900">
            <FaReact />
          </LogoItem>,
          <LogoItem key={4} className="bg-white text-black">
            <RiTailwindCssFill />
          </LogoItem>,
          <LogoItem key={5} className="bg-purple-300 text-neutral-900">
            <SiPowerbi />
          </LogoItem>,
          <LogoItem key={6} className="bg-orange-300 text-neutral-900">
            <FaJava />
          </LogoItem>,
          <LogoItem key={7} className="bg-green-300 text-neutral-900">
            <SiTypescript />
          </LogoItem>,
          <LogoItem key={8} className="bg-blue-300 text-neutral-900">
            <FaNodeJs />
          </LogoItem>,
          <LogoItem key={9} className="bg-white text-black">
            <DiMongodb />
          </LogoItem>,
          <LogoItem key={10} className="bg-purple-300 text-neutral-900">
            <DiMysql />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="skills-rep relative z-0 h-44 w-60 shrink-0 rounded-xl "
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "skills-logo grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
