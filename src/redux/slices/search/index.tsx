import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISearch {
  searchValue: string;
}

export const initialState: ISearch = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
