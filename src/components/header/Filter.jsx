import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import header from "../../css/header.module.css";
import { FilterContext } from "../../context/FilterContext";

export default function Filter() {
  // const [isActive, setIsActive] = useState(false);
  const { isComplete } = useContext(FilterContext);
  /**
   * 1. isComplete 를 읽고 활성화
   *
   * 1. 클릭시 isComplete 업데이트
   */

  // useEffect(() => {
  //   if(isComplete === 'All') {

  //   }
  // }, [isComplete])

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
