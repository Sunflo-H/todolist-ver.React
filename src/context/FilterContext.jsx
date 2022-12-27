import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [isComplete, setIsComplete] = useState("All");
  return (
    <FilterContext.Provider value={{ isComplete, setIsComplete }}>
      {children}
    </FilterContext.Provider>
  );
}
