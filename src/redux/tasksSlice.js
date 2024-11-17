import { createSlice } from "@reduxjs/toolkit";
import { arrayMove } from "@dnd-kit/sortable";

const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
storedTasks.forEach((task) => (task.isMenuOpened = false));
const initialState = [...storedTasks];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const newState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    editTask: (state, action) => {
      const newState = state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              title: action.payload.changedTask.title,
              about: action.payload.changedTask.about,
            }
          : { ...task }
      );
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    toggleTask: (state, action) => {
      const newState = state.map((task) =>
        task.id === action.payload
          ? { ...task, isMenuOpened: !task.isMenuOpened }
          : { ...task, isMenuOpened: false }
      );
      return newState;
    },
    loadTasks: (state) => {
      state = JSON.parse(localStorage.getItem("tasks")) || [];
      state.forEach((task) => (task.isMenuOpened = false));
    },
    moveTask: (state, action) => {
      const { active, over } = action.payload;

      if (active.id === over.id) return state;

      const originalPos = state.findIndex((task) => task.id === active.id);
      const newPos = state.findIndex((task) => task.id === over.id);

      const newState = arrayMove([...state], originalPos, newPos);

      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  toggleTask,
  loadTasks,
  moveTask,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer;
