import React from "react";

import main from "../../css/main.module.css";
import Complete from "./Complete";
import Delete from "./Delete";
import Title from "./Title";

export default function List({ item }) {
  console.log(item);
  return (
    <div className={main.list}>
      <Complete id={item.id} />
      <Title title={item.title} isComplete={item.complete} />
      <Delete id={item.id} />
    </div>
  );
}
