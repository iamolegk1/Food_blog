import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilter {
  activeFilter: string;
}

export const initialState: IFilter = {
  activeFilter: "all",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveFilter(state, action: PayloadAction<string>) {
      state.activeFilter = action.payload;
    },
  },
});

export const { setActiveFilter } = filterSlice.actions;

export default filterSlice.reducer;
