import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: true,
    error: "",
  },
  reducers: {
    setData: (state, action: PayloadAction<[]>) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setError: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
  },
});

export const { setData, setLoading, setError } = dataSlice.actions;
export default dataSlice.reducer;
