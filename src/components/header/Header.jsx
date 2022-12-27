import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import header from "../../css/header.module.css";
import Filter from "./Filter";
import Mode from "./Mode";

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div
      className={
        darkMode ? `${header.header} ${header.dark}` : `${header.header}`
      }
    >
      <Mode />
      <Filter />
    </div>
  );
}
