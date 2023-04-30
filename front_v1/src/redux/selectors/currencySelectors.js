import { createSelector } from "@reduxjs/toolkit";

export const getAllCurrenciesSelector = (state) => state.currency.currencies;

export const getSelectedCurrencySelector = (state) =>
  state.currency.selectedCurrency;

export const getCurrentExchangeRateSelector = createSelector(
  getAllCurrenciesSelector,
  getSelectedCurrencySelector,
  (currencies = [], selectedCurrency = "") => {
    const selectedCurrencyObject = currencies.find(
      ({ code }) => code === selectedCurrency
    );

    return selectedCurrencyObject ? selectedCurrencyObject.exchange_rate : 0;
  }
);
