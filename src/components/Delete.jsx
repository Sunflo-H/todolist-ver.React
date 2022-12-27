import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import main from "../css/main.module.css";

export default function Delete() {
  return (
    <div className={main["icon-box"]}>
      <FaTrashAlt />
    </div>
  );
}
