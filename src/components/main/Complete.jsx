import React, { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";
import { ToDoContext } from "../../context/ToDoContext";
import main from "../../css/main.module.css";

export default function Complete({ id }) {
  const { list, completeItem } = useContext(ToDoContext);
  const { color } = useContext(ColorContext);
  const handleChange = (e) => {
    completeItem(id);
  };

  if (color) {
    return (
      <input
        type="checkbox"
        className={`${main.checkbox} ${main.blue}`}
        onChange={handleChange}
        checked={list.find((item) => item.id === id).complete ? true : false}
      />
    );
  } else {
    return (
      <input
        type="checkbox"
        className={main.checkbox}
        onChange={handleChange}
        checked={list.find((item) => item.id === id).complete ? true : false}
      />
    );
  }
}
