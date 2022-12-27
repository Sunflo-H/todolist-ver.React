import React from "react";
import footer from "../../css/footer.module.css";

export default function Input() {
  return (
    <div className={footer["input-box"]}>
      <input type="text" className={footer.input} />
    </div>
  );
}
