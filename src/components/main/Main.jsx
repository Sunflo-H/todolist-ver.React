import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { FilterContext } from "../../context/FilterContext";
import { ToDoContext } from "../../context/ToDoContext";
import main from "../../css/main.module.css";
import List from "./List";

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);
  const { list } = useContext(ToDoContext);
  const { isComplete } = useContext(FilterContext);

  if (isComplete === "All") {
    return (
      <div className={darkMode ? `${main.main} ${main.dark}` : main.main}>
        {list.map((item) => (
          <List item={item} key={item.id} />
        ))}
      </div>
    );
  } else if (isComplete === "Active") {
    return (
      <div className={darkMode ? `${main.main} ${main.dark}` : main.main}>
        {list
          .filter((item) => item.complete === false)
          .map((item) => (
            <List item={item} key={item.id} />
          ))}
      </div>
    );
  } else if (isComplete === "Complete") {
    return (
      <div className={darkMode ? `${main.main} ${main.dark}` : main.main}>
        {list
          .filter((item) => item.complete === true)
          .map((item) => (
            <List item={item} key={item.id} />
          ))}
      </div>
    );
  }
}
