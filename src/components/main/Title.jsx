import React from "react";
import main from "../../css/main.module.css";

export default function Title({ title }) {
  return <div className={main.title}>{title}</div>;
}
