import { createContext, useEffect, useState } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    setColor((prev) => {
      let current = !prev;
      localStorage.setItem("color", JSON.stringify(current));

      return !prev;
    });
  };

  const getColorFromLocalStorage = () => {
    let result = color;
    if (localStorage.getItem("color")) {
      result = JSON.parse(localStorage.getItem("color"));
    }
    return result;
  };

  useEffect(() => {
    setColor(getColorFromLocalStorage());
  }, []);

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
}
