import { createSlice } from "@reduxjs/toolkit";
import { houses } from "../data";
export const filterSlice = createSlice({
  name: "filter",
  initialState: [houses],
  reducers: {
    filtering(state, action) {
      console.log(action.payload);
      state.filteredHouse = action.payload;
    },
  },
});

export const { filtering } = filterSlice.actions;
export default filterSlice.reducer;
