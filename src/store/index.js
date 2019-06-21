import { createStore } from "redux";

const INITIAL_STATE = {
  data: [{ id: 1, name: "React.js" }, { id: 2, name: "React native" }]
};

//reducer
function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return {
        ...state,
        data: [...state.data, { id: Math.random(), name: action.payload.name }]
      };

    case "DEL_COURSE": {
      return {
        ...state,
        data: [...state.data.filter(course => course.id !== action.payload.id)]
      };
    }
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
