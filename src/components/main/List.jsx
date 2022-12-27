import React from "react";

import main from "../../css/main.module.css";
import Complete from "./Complete";
import Delete from "./Delete";
import Title from "./Title";

export default function List({ item }) {
  return (
    <div className={main.list}>
      <Complete />
      <Title title={item.title} />
      <Delete />
    </div>
  );
}
