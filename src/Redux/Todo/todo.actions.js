import * as types from "./todo.actionTypes";
import axios from "axios";

export const addTodo = (todo) => (dispatch) => {
  axios
    .post("http://localhost:8080/todos", todo)
    .then((res) => {
      dispatch({ type: types.ADD_TODO, payload: todo });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

export const getTodos = () => (dispatch) => {
  axios
    .get("http://localhost:8080/todos")
    .then((res) => {
      dispatch({ type: types.GET_TODO, payload: res.data });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

export const toggleTodo = (todo) => (dispatch) => {
  axios
    .patch(`http://localhost:8080/todos/${todo.id}`, {
      status: !todo.status,
    })
    .then((res) => {
      dispatch({ type: types.TOGGLE_TODO, payload: todo });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

export const editTodo = (todo, value) => (dispatch) => {
  axios
    .patch(`http://localhost:8080/todos/${todo.id}`, { title: value })
    .then((res) => {
      dispatch({
        type: types.EDIT_TODO,
        payload: { id: todo.id, value: value },
      });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

export const deleteTodo = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:8080/todos/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_TODO, payload: id });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};
