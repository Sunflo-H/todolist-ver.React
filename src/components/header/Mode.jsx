import React, { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { DarkModeContext } from "../../context/DarkModeContext";
import header from "../../css/header.module.css";

export default function Mode() {
  // const [darkMode, setDarkMode] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleIconClick = () => {
    toggleDarkMode();
  };

  return (
    <div className={header.iconBox}>
      {darkMode ? (
        <FaSun
          className={`${header.icon} ${header.dark}`}
          onClick={handleIconClick}
        />
      ) : (
        <FaMoon className={`${header.icon}`} onClick={handleIconClick} />
      )}
    </div>
  );
}
