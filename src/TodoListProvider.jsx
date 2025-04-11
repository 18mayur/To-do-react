import React from "react";
import Addtodo from "./components/Addtodo";
// import ShowTodo from "../components/ShowTodo";
import { createContext, useState } from "react";

export const todoContext = createContext();

const TodoListProvider = () => {
  const [todo, setTodo] = useState([]);

  const addTask = (text) => {
    if (text.trim() !== "") {
      const newTask = { text, completed: false };
      setTodo([...todo, newTask]);
    }
  };
  const handletoggleCheck = (index) => {
    const updatedTasks = [...todo];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTodo(updatedTasks);
  };
  const handleRemoveTask = (Removeindex) => {
    const filteredTasks = todo.filter((_, index) => index !== Removeindex);
    setTodo(filteredTasks);
  };
  return (
    <>
      <todoContext.Provider
        value={{ todo, addTask, handletoggleCheck, handleRemoveTask }}
      >
        {/* <Addtodo />
        <ShowTodo /> */}
        {children}
      </todoContext.Provider>
    </>
  );
};

export default TodoListProvider;
