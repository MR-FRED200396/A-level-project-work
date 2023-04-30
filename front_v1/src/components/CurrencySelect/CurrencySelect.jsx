import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import {
  getAllCurrenciesAction,
  selectCurrency,
} from "../../redux/slices/currencySlice";
import {
  getAllCurrenciesSelector,
  getSelectedCurrencySelector,
} from "../../redux/selectors/currencySelectors";

export const CurrencySelect = () => {
  const dispatch = useDispatch();

  const currencies = useSelector(getAllCurrenciesSelector);
  const selectedCurrency = useSelector(getSelectedCurrencySelector);

  const handleChange = (currencyCode) => {
    dispatch(selectCurrency(currencyCode));
  };

  useEffect(() => {
    dispatch(getAllCurrenciesAction());
  }, []);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Currency</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedCurrency}
        label="Currency"
        onChange={(_, { props: { value } }) => handleChange(value)}
      >
        {Array.isArray(currencies) &&
          currencies.map(({ id, symbol, code }) => (
            <MenuItem value={code} key={id}>{`${symbol} ${code}`}</MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
