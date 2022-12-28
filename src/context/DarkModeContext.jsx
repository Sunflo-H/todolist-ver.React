import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

/**
 * 프로젝트 전체에 Dark Mode 를 적용하는 Context
 * @param {*} param0
 * @returns
 */
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      let current = !prev;
      localStorage.setItem("mode", JSON.stringify(current));
      return current;
    });
  };

  const getModeFromLocalStorage = () => {
    let result = darkMode;
    if (localStorage.getItem("mode")) {
      result = JSON.parse(localStorage.getItem("mode"));
    }
    return result;
  };

  useEffect(() => {
    setDarkMode(getModeFromLocalStorage());
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
