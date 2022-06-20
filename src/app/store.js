import { configureStore } from "@reduxjs/toolkit";
import scrapperSlice from "../features/scrapper/scrapperSlice";

export const store = configureStore({
  reducer: {
    scrapper: scrapperSlice,
  },
});
