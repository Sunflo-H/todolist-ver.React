import React from "react";
import Button from "./Button";
import styles from "../css/header.module.css";

export default function Filter() {
  return (
    <div className={styles.filter}>
      <Button name="All" />
      <Button name="Active" />
      <Button name="Complete" />
    </div>
  );
}
