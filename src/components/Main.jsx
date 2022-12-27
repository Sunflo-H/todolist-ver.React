import React from "react";
import main from "../css/main.module.css";
import List from "./List";

export default function Main() {
  /**
   * 리스트가 여러개 추가되면 된다.
   */
  return (
    <div className={main.main}>
      <List />
      {/* <List />
      <List />
      <List /> */}
    </div>
  );
}
