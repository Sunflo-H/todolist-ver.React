import React from "react";
import Button from "./Button";
import header from "../../css/header.module.css";

export default function Filter() {
  return (
    <div className={header.filter}>
      <Button name="All" />
      <Button name="Active" />
      <Button name="Complete" />
    </div>
  );
}
