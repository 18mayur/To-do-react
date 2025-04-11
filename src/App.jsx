import { createContext, useState } from "react";
import "./App.css";
import Addtodo from "./components/Addtodo";
import ShowTodo from "./components/ShowTodo";
import TodoListProvider from "./TodoListProvider";

export const todoContext = createContext();

function App() {
  return (
    <>
      {/* <TodoListProvider> */}
      <section>
        <div className="container">
          <h2>TO DO LIST</h2>
          {/* <TodoListProvider /> */}
          <Addtodo />
          <ShowTodo />
        </div>
      </section>
      {/* </TodoListProvider> */}
    </>
  );
}

export default App;
