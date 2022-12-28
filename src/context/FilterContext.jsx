import React, { createContext, useState } from "react";

export const FilterContext = createContext();

/**
 * list의 complete 상태에 따라 보여질 list를 필터링하는 Context
 * @param {*} param0
 * @returns
 */
export function FilterProvider({ children }) {
  const [isComplete, setIsComplete] = useState("All");
  return (
    <FilterContext.Provider value={{ isComplete, setIsComplete }}>
      {children}
    </FilterContext.Provider>
  );
}
