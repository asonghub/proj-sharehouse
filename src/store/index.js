import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import filterSlice from "./houseFilter";

const store = configureStore({
  reducer: { search: searchSlice, filter: filterSlice },
});

export default store;
