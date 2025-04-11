import { useState, React, useContext } from "react";
// import { todoContext } from "../App";
// import { todoContext } from "../TodoListProvider";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/TodoSlice";
const Addtodo = () => {
  const [Task, setTask] = useState("");
  const dispatch = useDispatch();
  // const { addTask } = useContext(todoContext);
  // const handleChange = (e) => {
  //   setTask(e.target.value);
  // };
  const handleClick = () => {
    if (Task.trim() !== "") {
      // addTask(Task);
      dispatch(addTask(Task));
      setTask("");
    }
  };
  return (
    <div className="todo">
      <div className="input-div">
        <input
          autoComplete="off"
          name="Todo"
          id="todo"
          className="input"
          type="text"
          value={Task}
          placeholder="Add Todo"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="btn">
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export default Addtodo;
