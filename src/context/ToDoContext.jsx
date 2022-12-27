import { createContext, useState } from "react";

export const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  // todolist에는 내용, 체크(완료) 유무, id

  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const addItem = (title) => {
    setList((prev) => [...prev, { title, complete: false, id: count }]);
    setCount((prev) => prev + 1);
    console.log(list);
  };

  const delItem = (id) => {
    setList((prev) => {
      //   prev.filter((item) => item.id !== id);
      return [...prev.filter((item) => item.id !== id)];
    });
  };
  return (
    <ToDoContext.Provider value={{ list, addItem, delItem }}>
      {children}
    </ToDoContext.Provider>
  );
}
