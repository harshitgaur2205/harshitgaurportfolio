import React from "react";
import styles from "./bubble.module.css";


const BubbleText = () => {
  return (
    <h2 className="text-center text-[5vw] font-thin text-indigo-300">
      {"SKILLS  ".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;