import React from "react";
import styles from "./bubble.module.css";


const BubbleText = () => {
  return (
    <h2 className="bonjour text-center text-4xl font-thin text-indigo-300">
      {"Bonjour".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;