import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};
export const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        text: action.payload,
        completed: false,
      };
      // console.log(newTask);
      state.todo.push(newTask);
    },
    handletoggleCheck: (state, action) => {
      const index = action.payload;
      state.todo[index].completed = !state.todo[index].completed;
    },
    handleRemoveTask: (state, action) => {
      const RemoveIndex = action.payload;
      state.todo.splice(RemoveIndex, 1);
    },
    handleclearAllTask: (state) => {
      state.todo = state.todo.filter((task) => !task.completed);
    },

    handleSelectAll: (state) => {
      let allCompleted = true;
      for (const task of state.todo) {
        if (!task.completed) {
          allCompleted = false;
        }
      }

      state.todo = state.todo.map((task) => ({
        ...task,
        completed: !allCompleted,
      }));
    },
  },
});
export const {
  addTask,
  handletoggleCheck,
  handleRemoveTask,
  handleclearAllTask,
  handleSelectAll,
} = slice.actions;
export default slice.reducer;
