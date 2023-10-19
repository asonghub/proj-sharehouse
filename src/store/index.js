import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import loginSlice from "./login";

const store = configureStore({
  reducer: { search: searchSlice, login: loginSlice },
});

export default store;
