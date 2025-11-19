import { createAction } from "@reduxjs/toolkit";
import { TodoListState } from "./todoListSlice";

export const rehydrate = createAction<{ todoList: TodoListState }>(
  "__persist/rehydrate",
);
