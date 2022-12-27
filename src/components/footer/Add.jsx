import React, { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";
import footer from "../../css/footer.module.css";

export default function Add({ input }) {
  const { addItem } = useContext(ToDoContext);
  const handleClick = () => {
    addItem(input);
  };
  return (
    <div className={footer.button} onClick={handleClick}>
      Add
    </div>
  );
}
