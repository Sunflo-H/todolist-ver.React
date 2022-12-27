import React, { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";
import main from "../../css/main.module.css";

export default function Complete({ id }) {
  const { list, completeItem } = useContext(ToDoContext);
  const handleClick = (e) => {
    completeItem(id);
  };
  return (
    <input
      type="checkbox"
      className={main.checkbox}
      onClick={handleClick}
      checked={list.find((item) => item.id === id).complete ? true : false}
    />
  );
}
