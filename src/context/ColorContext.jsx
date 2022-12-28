import { createContext, useState } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    setColor((prev) => !prev);
  };
  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
}
