import { configureStore } from "@reduxjs/toolkit";
import diarys from "../modules/diarySlice";

const store = configureStore({
  reducer: { diarys: diarys },
  devTools: process.env.NODE_ENV === "developmetns" ? false : true,
});

export default store;
