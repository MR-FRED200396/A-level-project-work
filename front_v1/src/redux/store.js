import { configureStore } from "@reduxjs/toolkit";

import currencySlice from "./slices/currencySlice";
import productsSlice from "./slices/productsSlice";
import categoriesSlice from "./slices/categoriesSlice";
import modalsSlice from "./slices/modalsSlice";

export const store = configureStore({
  reducer: {
    currency: currencySlice,
    products: productsSlice,
    categories: categoriesSlice,
    modals: modalsSlice,
  },
  devTools: true,
});
