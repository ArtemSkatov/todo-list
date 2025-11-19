import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoListReducer } from "@/entities/todo";

// rootReducer
const rootReducer = combineReducers({
  todoList: todoListReducer,
});

// функция для создания store
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

// Типы
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
