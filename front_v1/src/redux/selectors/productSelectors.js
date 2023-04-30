import { createSelector } from "@reduxjs/toolkit";

import { getCurrentExchangeRateSelector } from "./currencySelectors";

export const getAllProductsSelector = (state) => state.products.products;

export const getSelectedProductsSelector = (state) =>
  state.products.selectedProducts;

export const getProductsTotalCountSelector = (state) =>
  state.products.totalCount;

export const getAllProductsByCurrencySelector = createSelector(
  getAllProductsSelector,
  getCurrentExchangeRateSelector,
  (products, currentExchangeRate) =>
    products.map((product) => ({
      ...product,
      formattedPrice: +product.price * +currentExchangeRate,
    }))
);

export const getSelectedProductsByCurrencySelector = createSelector(
  getAllProductsSelector,
  getSelectedProductsSelector,
  getCurrentExchangeRateSelector,
  (products, selectedProducts, currentExchangeRate) =>
    products.reduce((result, product) => {
      if (selectedProducts[product.id]) {
        result.push({
          ...product,
          count: selectedProducts[product.id],
          totalPrice:
            +product.price *
            +currentExchangeRate *
            selectedProducts[product.id],
          formattedPrice: +product.price * +currentExchangeRate,
        });
      }

      return result;
    }, [])
);

export const getSelectedProductsTotalPrice = createSelector(
  getSelectedProductsByCurrencySelector,
  (selectedProductsByCurrencySelector) =>
    selectedProductsByCurrencySelector.reduce((result, product) => {
      result += product.totalPrice;
      return result;
    }, 0)
);
