import * as types from "./todo.actionTypes";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_TODO: {
      return { ...state, todos: [...state.todos, payload] };
    }

    case types.GET_TODO: {
      return { ...state, todos: payload };
    }

    case types.TOGGLE_TODO: {
      let newTodo = state.todos.map((el) => {
        if (el.id === payload.id) {
          el.status = !el.status;
        }
        return el;
      });
      return { ...state, todos: newTodo };
    }

    case types.EDIT_TODO: {
      let newTodo = state.todos.map((el) => {
        if (el.id === payload.id) {
          el.title = payload.value;
        }
        return el;
      });
      return { ...state, todos: newTodo };
    }

    case types.DELETE_TODO: {
      let newTodo = state.todos.filter((el) => el.id !== payload);
      return { ...state, todos: newTodo };
    }

    default: {
      return state;
    }
  }
};
