import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPagination {
  currentPage: number;
}

export const initialState: IPagination = {
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
