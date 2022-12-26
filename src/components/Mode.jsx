import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "../css/header.module.css";

export default function Mode() {
  const [darkMode, setDarkMode] = useState(false);

  const handleIconClick = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={styles.iconBox}>
      {darkMode ? (
        <FaSun className={styles.icon__dark} onClick={handleIconClick} />
      ) : (
        <FaMoon className={styles.icon__light} onClick={handleIconClick} />
      )}
    </div>
  );
}
