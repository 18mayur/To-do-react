import { React, useState } from "react";
// import { todoContext } from "../App";
// import { todoContext } from "./TodoListProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  handletoggleCheck,
  handleRemoveTask,
  handleclearAllTask,
  handleSelectAll,
} from "../redux/TodoSlice";

const ShowTodo = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todo);
  // const [selected, setSelected] = useState(false);
  let allCompleted = todo.length > 0;
  for (const task of todo) {
    if (!task.completed) {
      allCompleted = false;
    }
  }

  // const { todo, handletoggleCheck, handleRemoveTask } = useContext(todoContext);
  return (
    <>
      <div className="todo_list">
        <div className="selectAll">
          <label className="container1">
            <input
              type="checkbox"
              checked={allCompleted}
              onChange={() => dispatch(handleSelectAll())}
            />
            <div className="checkmark"></div>
            <span> All Task Done </span>
          </label>
          <button
            className="clearTask"
            onClick={() => dispatch(handleclearAllTask())}
          >
            <img src="/clear.svg" width="20px" alt="" />
          </button>
        </div>
        {todo.length === 0 && <span className="noTask">No Task is added </span>}
        {todo.length > 0 && (
          <ul>
            {todo.map((task, index) => (
              <li key={index} className="todo-task">
                <div className="check-div-1">
                  <div
                    className={task.completed ? "selected" : "check"}
                    onClick={() => dispatch(handletoggleCheck(index))}
                  >
                    {task.completed && "✔"}
                  </div>
                  <span className={task.completed ? "completed" : "name"}>
                    {task.text}
                  </span>
                </div>
                <img
                  src="/cross.svg"
                  onClick={() => dispatch(handleRemoveTask(index))}
                  alt="cross"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ShowTodo;
