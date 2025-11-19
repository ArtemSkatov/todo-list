"use client";
import { setupListeners } from "@reduxjs/toolkit/query";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { loadState, saveState } from "@/shared/lib/store";
import { makeStore } from "./store";
import type { AppStore } from "./store";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const store = storeRef.current;
    if (!store) return;

    // 1. Загружаем состояние
    const saved = loadState();
    if (saved) {
      store.dispatch({
        type: "__persist/rehydrate",
        payload: saved,
      });
    }

    // 2. Подписка на изменения
    const unsubscribeStore = store.subscribe(() => {
      const state = store.getState();
      saveState({
        todoList: state.todoList, // сохраняем нужный slice
      });
    });

    // 3. RTK Query listeners
    const unsubscribeListeners = setupListeners(store.dispatch);

    return () => {
      unsubscribeStore();
      unsubscribeListeners();
    };
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
