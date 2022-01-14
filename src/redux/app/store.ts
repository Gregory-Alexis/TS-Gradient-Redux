import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/data/dataSlice";
import filterTagSlice from "../features/filterTag/filterTagSlice";

export const store = configureStore({
  reducer: {
    loadDataSlice: dataSlice,
    filterTag: filterTagSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
