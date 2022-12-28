import React from "react";
import main from "../../css/main.module.css";

export default function Title({ title, isComplete }) {
  return (
    <div
      className={
        isComplete ? `${main.title} ${main.complete}` : `${main.title}`
      }
    >
      {title}
    </div>
  );
}
