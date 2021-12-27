import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const filterTagSlice = createSlice({
  name: "filter",
  initialState: {
    tags: "All",
  },
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      return { ...state, tags: action.payload };
    },
  },
});

export const { setFilter } = filterTagSlice.actions;
export default filterTagSlice.reducer;
