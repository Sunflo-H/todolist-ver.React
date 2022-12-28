import { createContext, useState } from "react";

export const DarkModeContext = createContext();

/**
 * 프로젝트 전체에 Dark Mode 를 적용하는 Context
 * @param {*} param0
 * @returns
 */
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
