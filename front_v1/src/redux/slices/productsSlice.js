import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllProducts } from "../../services/products";

export const getAllProductsAction = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const { items, totalCount } = await getAllProducts();
    return { items, totalCount };
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProducts: {},
    totalCount: 0,
    isLoading: false,
  },
  reducers: {
    selectProduct: (state, { payload }) => {
      state.selectedProducts[payload]
        ? (state.selectedProducts[payload] += 1)
        : (state.selectedProducts[payload] = 1);
    },
    deleteProduct: (state, { payload }) => {
      delete state.selectedProducts[payload];
    },
    deleteAllSelectedProducts: (state) => {
      state.selectedProducts = {};
    },
  },
  extraReducers: {
    [getAllProductsAction.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProductsAction.fulfilled]: (state, { payload }) => {
      state.products = payload.items;
      state.totalCount = payload.totalCount;
      state.isLoading = false;
    },
    [getAllProductsAction.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { selectProduct, deleteProduct, deleteAllSelectedProducts } =
  productSlice.actions;

export default productSlice.reducer;
