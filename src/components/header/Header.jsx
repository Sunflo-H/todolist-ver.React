import React from "react";
import header from "../../css/header.module.css";
import Filter from "./Filter";
import Mode from "./Mode";

export default function Header() {
  return (
    <div className={header.header}>
      <Mode />
      <Filter />
    </div>
  );
}
