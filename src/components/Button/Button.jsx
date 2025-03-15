import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick, style }) => {
  return (
    <button className={styles.smoothButton} onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
