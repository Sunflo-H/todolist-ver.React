import { createContext, useEffect, useState } from "react";

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
    setList((prev) => {
      let current = [...prev, { title, complete: false, id: count }];
      localStorage.setItem("todolist", JSON.stringify(current));
      localStorage.setItem("count", JSON.stringify(count));
      return current;
    });
    setCount((prev) => prev + 1);
  };

  const delItem = (id) => {
    setList((prev) => {
      let current = [...prev.filter((item) => item.id !== id)];
      localStorage.setItem("todolist", JSON.stringify(current));
      return current;
    });
  };

  const completeItem = (id) => {
    setList((prev) => {
      let current = [
        ...prev.map((item) => {
          if (item.id === id) {
            item.complete = !item.complete;
          }
          return item;
        }),
      ];
      localStorage.setItem("todolist", JSON.stringify(current));
      return current;
    });
  };

  const getListFromLocalStorage = () => {
    let list = JSON.parse(localStorage.getItem("todolist"));
    return list;
  };

  const getCountFromLocalStorage = () => {
    let count = JSON.parse(localStorage.getItem("count"));
    return count;
  };

  useEffect(() => {
    setList(getListFromLocalStorage());
    setCount(getCountFromLocalStorage());
  }, []);
  return (
    <ToDoContext.Provider value={{ list, addItem, delItem, completeItem }}>
      {children}
    </ToDoContext.Provider>
  );
}
