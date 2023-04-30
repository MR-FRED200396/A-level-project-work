import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllCurrencies } from "../../services/currency";

export const getAllCurrenciesAction = createAsyncThunk(
  "currency/getAllCurrencies",
  async () => {
    const { items } = await getAllCurrencies();
    return items;
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currencies: [],
    selectedCurrency: "USD",
    isLoading: false,
  },
  reducers: {
    selectCurrency: (state, { payload }) => {
      state.selectedCurrency = payload;
    },
  },
  extraReducers: {
    [getAllCurrenciesAction.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCurrenciesAction.fulfilled]: (state, { payload }) => {
      state.currencies = payload;
      state.isLoading = false;
    },
    [getAllCurrenciesAction.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { selectCurrency } = currencySlice.actions;

export default currencySlice.reducer;
