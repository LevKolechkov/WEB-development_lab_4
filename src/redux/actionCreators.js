import * as a from "./actionTypes";

export const addTask = (newTask) => {
  return {
    type: a.ADD_TASK,
    payload: newTask,
  };
};

export const deleteTask = (id) => {
  return {
    type: a.DELETE_TASK,
    payload: id,
  };
};

export const editTask = (id, changedTask) => {
  return {
    type: a.EDIT_TASK,
    payload: { id, changedTask },
  };
};

export const toggleTask = (id) => {
  return {
    type: a.TOGGLE_TASK,
    payload: id,
  };
};

export const loadTasks = () => {
  return {
    type: a.LOAD_TASKS,
  };
};

export const moveTask = (event) => {
  return {
    type: a.MOVE_TASK,
    payload: event,
  };
};
