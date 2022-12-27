import React, { useState } from "react";
import footer from "../../css/footer.module.css";

export default function Input({ input, handleChange }) {
  return (
    <div className={footer["input-box"]}>
      <input
        type="text"
        className={footer.input}
        onChange={handleChange}
        value={input}
      />
    </div>
  );
}
