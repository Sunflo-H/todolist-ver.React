import { createContext, useState } from "react";

export const ToDoContext = createContext();

/**
 * list를 생성, 삭제, 완료 하는 Context
 * @param {*} param0
 * @returns
 */
export function ToDoProvider({ children }) {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const addItem = (title) => {
    setList((prev) => [...prev, { title, complete: false, id: count }]);
    setCount((prev) => prev + 1);
  };

  const delItem = (id) => {
    setList((prev) => {
      return [...prev.filter((item) => item.id !== id)];
    });
  };

  const completeItem = (id) => {
    setList((prev) => [
      ...prev.map((item) => {
        if (item.id === id) {
          item.complete = !item.complete;
        }
        return item;
      }),
    ]);
  };
  return (
    <ToDoContext.Provider value={{ list, addItem, delItem, completeItem }}>
      {children}
    </ToDoContext.Provider>
  );
}
