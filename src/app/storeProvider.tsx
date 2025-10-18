"use client";

import React, { useState } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./lib/features/counterSlice"; // <-- path is correct for src/app/**

function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export type AppStore = ReturnType<typeof makeStore>;

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  // Create the Redux store once on the client
  const [store] = useState<AppStore>(() => makeStore());
  return <Provider store={store}>{children}</Provider>;
}
