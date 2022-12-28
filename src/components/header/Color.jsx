import React, { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";
import header from "../../css/header.module.css";

export default function Color() {
  const { color, changeColor } = useContext(ColorContext);

  return (
    <div
      className={
        color ? `${header["color-icon"]} ${header.blue}` : header["color-icon"]
      }
      onClick={changeColor}
    ></div>
  );
}
