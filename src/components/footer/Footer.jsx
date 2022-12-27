import React from "react";
import Add from "./Add";
import Input from "./Input";
import footer from "../../css/footer.module.css";

export default function Footer() {
  return (
    <div className={footer.footer}>
      <div className={footer["content-box"]}>
        <Input />
        <Add />
      </div>
    </div>
  );
}
