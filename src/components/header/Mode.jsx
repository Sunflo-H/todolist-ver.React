import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import header from "../../css/header.module.css";

export default function Mode() {
  const [darkMode, setDarkMode] = useState(false);

  const handleIconClick = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={header.iconBox}>
      {darkMode ? (
        <FaSun className={header.icon__dark} onClick={handleIconClick} />
      ) : (
        <FaMoon className={header.icon__light} onClick={handleIconClick} />
      )}
    </div>
  );
}
