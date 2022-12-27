import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { DarkModeContext } from "../../context/DarkModeContext";
import { ToDoContext } from "../../context/ToDoContext";
import main from "../../css/main.module.css";

export default function Delete({ id }) {
  const { darkMode } = useContext(DarkModeContext);
  const { list, delItem } = useContext(ToDoContext);
  const handleClick = (e) => {
    delItem(id);
  };
  return (
    <div
      className={
        darkMode ? `${main["icon-box"]} ${main.dark}` : main["icon-box"]
      }
      onClick={handleClick}
    >
      <FaTrashAlt />
    </div>
  );
}
