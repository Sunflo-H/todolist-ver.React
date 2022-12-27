import React from "react";
import styles from "../css/header.module.css";
import Filter from "./Filter";
import Mode from "./Mode";

export default function Header() {
  return (
    <div className={styles.header}>
      <Mode />
      <Filter />
    </div>
  );
}
