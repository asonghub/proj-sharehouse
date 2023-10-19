import { createSlice } from "@reduxjs/toolkit";
import { houses } from "../data";
const { kakao } = window;

export const searchSlice = createSlice({
  name: "search",
  initialState: { region: "", gender: "", filteredhouse: houses },
  reducers: {
    setFilter(state, action) {
      console.log(action.payload);
      let { region, gender } = action.payload;
      if (region === "전체" && gender === "전체") {
        console.log("3");
        state.filteredhouse = houses;
      } else if (region !== "" && (gender === "" || gender === "전체")) {
        console.log("1");
        state.filteredhouse = houses.filter((v) => v.placeName === region);
      } else if (gender !== "" && (region === "" || region === "전체")) {
        console.log("2");
        state.filteredhouse = houses.filter((v) => v.gender === gender);
      } else if (gender !== "" && region !== "") {
        console.log("4");
        state.filteredhouse = houses.filter(
          (v) => v.placeName === region && v.gender === gender
        );
      }
      // } else {
      //   console.log("3");
      //   state.filteredhouse = houses;
      // }
      // state.region = action.payload.region;
      // state.gender = action.payload.gender;
      // console.log("스토어", action);
      // state.filteredhouse = houses.filter(
      //   (v) => v.placeName === state.region && v.gender === state.gender
      // );
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
