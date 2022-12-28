import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import header from "../../css/header.module.css";
import { FilterContext } from "../../context/FilterContext";

export default function Filter() {
  const { isComplete } = useContext(FilterContext);

  return (
    <div className={header.filter}>
      <Button name="All" active={isComplete === "All" ? true : false} />
      <Button name="Active" active={isComplete === "Active" ? true : false} />
      <Button
        name="Complete"
        active={isComplete === "Complete" ? true : false}
      />
    </div>
  );
}
