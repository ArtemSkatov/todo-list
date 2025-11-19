import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../types";
import { rehydrate } from "./rehydrate";

export interface TodoListState {
  todos: Todo[];
}

const initialState: TodoListState = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: { payload: Todo }) => {
      const newsState: TodoListState = {
        ...state,
        todos: state.todos.length
          ? [{ ...action.payload, id: uuidv4() }, ...state.todos]
          : [{ ...action.payload, id: uuidv4() }],
      };

      return newsState;
    },

    removeTodo: (state, action: { payload: string }) => {
      const newState = state.todos.filter((todo) => todo.id !== action.payload);

      return { ...state, todos: newState };
    },
    startTime: (state, action: { payload: string }) => {
      const newState: Todo[] = state.todos.map((todo) => {
        if (todo.status === "inProgress") {
          return { ...todo, status: "start" };
        }
        if (todo.id === action.payload) {
          return { ...todo, status: "inProgress" };
        }
        return todo;
      });
      return { ...state, todos: newState };
    },
    pauseTime: (
      state,
      action: { payload: { id: string; lastTime: number } },
    ) => {
      const newState: Todo[] = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, status: "pause", timer: action.payload.lastTime };
        }
        return todo;
      });
      return { ...state, todos: newState };
    },
    doneTodo: (
      state,
      action: { payload: { id: string; lastTime: number } },
    ) => {
      const newState: Todo[] = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, status: "done", timer: action.payload.lastTime };
        }
        return todo;
      });
      return { ...state, todos: newState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(rehydrate, (state, action) => {
      return action.payload?.todoList ?? state;
    });
  },
});

export const { addTodo, removeTodo, startTime, pauseTime, doneTodo } =
  todoListSlice.actions;
export const todoListReducer = todoListSlice.reducer;
