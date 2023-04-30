import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllCategories } from "../../services/categories";

export const getAllCategoriesAction = createAsyncThunk(
  "categories/getAllCategories",
  async () => {
    const { items } = await getAllCategories();
    return items;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoading: false,
  },
  extraReducers: {
    [getAllCategoriesAction.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCategoriesAction.fulfilled]: (state, { payload }) => {
      state.categories = payload;
      state.isLoading = false;
    },
    [getAllCategoriesAction.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default categoriesSlice.reducer;
