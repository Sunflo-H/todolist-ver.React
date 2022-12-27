import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import main from "../../css/main.module.css";
import List from "./List";

export default function Main() {
  /**
   * 리스트가 여러개 추가되면 된다.
   */
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? `${main.main} ${main.dark}` : main.main}>
      <List />
      {/* <List />
      <List />
      <List /> */}
    </div>
  );
}
