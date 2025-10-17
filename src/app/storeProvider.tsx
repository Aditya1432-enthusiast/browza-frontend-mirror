"use client";

import React, { useState } from "react";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "./store"; // adjust path if your store file lives elsewhere

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  // Lazy-init so the store is created exactly once on the client
  const [store] = useState<AppStore>(() => makeStore());
  return <Provider store={store}>{children}</Provider>;
}
