import { configureStore } from "@reduxjs/toolkit";
import conversationsReducer from "./conversationsSlice/conversationsSlice";
export const store = configureStore({
  reducer: {
    conversations: conversationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
