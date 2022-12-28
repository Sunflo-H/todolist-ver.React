import React, { useContext, useState } from "react";
import Add from "./Add";
import Input from "./Input";
import footer from "../../css/footer.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Footer() {
  const { darkMode } = useContext(DarkModeContext);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput((prev) => e.target.value);
  };
  return (
    <div
      className={darkMode ? `${footer.footer} ${footer.dark}` : footer.footer}
    >
      <div className={footer["content-box"]}>
        <Input input={input} handleChange={handleChange} />
        <Add input={input} setInput={setInput} />
      </div>
    </div>
  );
}
