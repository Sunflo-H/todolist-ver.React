import React, { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";
import { ToDoContext } from "../../context/ToDoContext";
import footer from "../../css/footer.module.css";

export default function Add({ input, setInput }) {
  const { addItem } = useContext(ToDoContext);
  const { color } = useContext(ColorContext);
  const handleClick = () => {
    if (input === "") return;
    addItem(input);
    setInput("");
  };

  if (color) {
    return (
      <div className={`${footer.button} ${footer.blue}`} onClick={handleClick}>
        Add
      </div>
    );
  } else {
    return (
      <div className={footer.button} onClick={handleClick}>
        Add
      </div>
    );
  }
}
