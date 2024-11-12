import * as a from "./actionTypes";

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_TASK:
      return [...state, action.payload];

    case a.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case a.EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              title: action.payload.changedTask.title,
              about: action.payload.changedTask.about,
            }
          : { ...task }
      );

    case a.TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isMenuOpened: !task.isMenuOpened }
          : { ...task, isMenuOpened: false }
      );

    default:
      return state;
  }
};

export default taskReducer;
