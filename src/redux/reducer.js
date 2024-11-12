import { arrayMove } from "@dnd-kit/sortable";
import * as a from "./actionTypes";

const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
storedTasks.forEach((task) => (task.isMenuOpened = false));
const initialState = [...storedTasks];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_TASK:
      state = [...state, action.payload];
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;

    case a.DELETE_TASK:
      state = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;

    case a.EDIT_TASK:
      state = state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              title: action.payload.changedTask.title,
              about: action.payload.changedTask.about,
            }
          : { ...task }
      );
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;

    case a.TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isMenuOpened: !task.isMenuOpened }
          : { ...task, isMenuOpened: false }
      );

    case a.LOAD_TASKS:
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      storedTasks.forEach((task) => (task.isMenuOpened = false));
      return storedTasks;

    case a.MOVE_TASK:
      const { active, over } = action.payload;

      if (active.id === over.id) return state;

      const originalPos = state.findIndex((task) => task.id === active.id);
      const newPos = state.findIndex((task) => task.id === over.id);

      const newState = arrayMove([...state], originalPos, newPos);

      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export default taskReducer;
