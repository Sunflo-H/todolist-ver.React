import React, { useContext } from "react";
import Add from "./Add";
import Input from "./Input";
import footer from "../../css/footer.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Footer() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={darkMode ? `${footer.footer} ${footer.dark}` : footer.footer}
    >
      <div className={footer["content-box"]}>
        <Input />
        <Add />
      </div>
    </div>
  );
}
