import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { ToDoContext } from "../../context/ToDoContext";
import main from "../../css/main.module.css";
import List from "./List";

export default function Main() {
  /**
   * 리스트가 여러개 추가되면 된다.
   */
  const { darkMode } = useContext(DarkModeContext);
  const { list } = useContext(ToDoContext);
  return (
    <div className={darkMode ? `${main.main} ${main.dark}` : main.main}>
      {list.map((item) => (
        <List item={item} />
      ))}
      {/* <List /> */}
    </div>
  );
}
