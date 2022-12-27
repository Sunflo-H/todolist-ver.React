import { createContext, useState } from "react";

export const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  // todolist에는 내용, 체크(완료) 유무

  const [list, setList] = useState([]);
  const addList = (title) =>
    setList((prev) => [...prev, { title, complete: false }]);

  return (
    <ToDoContext.Provider value={{ list, addList }}>
      {children}
    </ToDoContext.Provider>
  );
}
