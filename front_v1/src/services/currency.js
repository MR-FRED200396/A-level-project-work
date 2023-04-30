import Axios from "./api";

export const getAllCurrencies = async () => {
  return await Axios.get("/currency");
};
