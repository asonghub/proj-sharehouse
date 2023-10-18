import { createSlice } from "@reduxjs/toolkit";
import { houses } from "../data";
const { kakao } = window;

export const searchSlice = createSlice({
  name: "search",
  initialState: { region: "", gender: "", filteredhouse: houses },
  reducers: {
    setFilter(state, action) {
      state.region = action.payload.region;
      state.gender = action.payload.gender;
      console.log("스토어", action);
      state.filteredhouse = houses.filter(
        (v) => v.placeName === state.region && v.gender === state.gender
      );
    },
    mapFilter(state, action) {
      console.log("mapfiler", action);
      state.filteredhouse = action.payload;
    },
    resetList(state) {
      state.filteredhouse = houses;
    },
  },
});

export const { setFilter, mapFilter, resetList } = searchSlice.actions;
export default searchSlice.reducer;
