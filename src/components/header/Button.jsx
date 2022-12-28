import React, { useContext, useEffect, useState } from "react";
import { ColorContext } from "../../context/ColorContext";
import { FilterContext } from "../../context/FilterContext";
import { ToDoContext } from "../../context/ToDoContext";
import header from "../../css/header.module.css";

/**
 * 버튼은 클릭하면 액티브되는 css 기능과 필터링하는 기능을 한다.
 * @param {*} param0
 * @returns
 */
export default function Button({ name, active }) {
  const { setIsComplete } = useContext(FilterContext);
  const { color } = useContext(ColorContext);

  const handleClick = (e) => {
    setIsComplete(name);
  };

  if (color) {
    return (
      <div
        className={
          active
            ? `${header.button} ${header.active} ${header.blue}`
            : `${header.button} ${header.blue}`
        }
        onClick={handleClick}
      >
        {name}
      </div>
    );
  } else {
    return (
      <div
        className={
          active ? `${header.button} ${header.active}` : `${header.button}`
        }
        onClick={handleClick}
      >
        {name}
      </div>
    );
  }
}
