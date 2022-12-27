import React from "react";
import styles from "../css/header.module.css";

export default function Button({ name }) {
  // 필터링 되는 기능
  return <div className={styles.button}>{name}</div>;
}
