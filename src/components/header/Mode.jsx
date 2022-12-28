import React, { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ColorContext } from "../../context/ColorContext";
import { DarkModeContext } from "../../context/DarkModeContext";
import header from "../../css/header.module.css";

export default function Mode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { color } = useContext(ColorContext);

  const handleIconClick = () => {
    toggleDarkMode();
  };

  if (color) {
    return (
      <div className={header.iconBox}>
        {darkMode ? (
          <FaSun
            className={`${header.icon} ${header.dark} ${header.blue}`}
            onClick={handleIconClick}
          />
        ) : (
          <FaMoon
            className={`${header.icon} ${header.blue}`}
            onClick={handleIconClick}
          />
        )}
      </div>
    );
  } else {
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
}
