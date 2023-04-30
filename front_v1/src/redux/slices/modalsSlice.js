import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    shoppingCart: false,
  },
  reducers: {
    toggleModal: (state, { payload }) => {
      state[payload] = !state[payload];
    },
  },
});

export const { toggleModal } = modalsSlice.actions;

export default modalsSlice.reducer;
