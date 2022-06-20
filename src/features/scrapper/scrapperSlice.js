import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import scrapperService from "./scrapperService";

//initial state
const initialState = {
  scraptedData: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//get the scrapted data
export const getScraptedData = createAsyncThunk(
  "data/getScraptedData",
  async (body, thunkAPI) => {
    try {
      //call the getScraptedData()
      return await scrapperService.getScraptedData(body);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//export scrapper slice
export const scrapperSlice = createSlice({
  name: "scrapper",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(getScraptedData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getScraptedData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.scraptedData = action.payload;
      })
      .addCase(getScraptedData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

//export reset func
export const { reset } = scrapperSlice.actions;

//export manage news slice reducer
export default scrapperSlice.reducer;
