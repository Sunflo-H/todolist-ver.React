import React, { useState } from "react";
import header from "../../css/header.module.css";

/**
 * 버튼은 클릭하면 액티브되는 css 기능과 필터링하는 기능을 한다.
 * @param {*} param0
 * @returns
 */
export default function Button({ name }) {
  const [isActive, setIsActive] = useState(false);

  /**
   * 1. 클릭 => active
   */
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div
      className={`${header.button} ${header[isActive]}`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
}
