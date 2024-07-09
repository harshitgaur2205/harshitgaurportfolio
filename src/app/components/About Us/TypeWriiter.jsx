import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const TypeWriiter = () => {
  const [typeEffect] = useTypewriter({
    words: ["Web Developer ?", "Data Analyst ?", "Actor ?", "Rapper ?", "Writter ?"],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 30,
  });
  return (
    <div id="amIa" className="about-txt text-[3.5vw] font-black text-slate-500 shadow-lg ">
      <h1 >
        AM I A <t></t> <span className="text-indigo-600">{typeEffect}</span> 
      </h1>
    </div>
  );
};

export default TypeWriiter;
