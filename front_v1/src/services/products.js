import Axios from "./api";

export const getAllProducts = async () => {
  return await Axios.get("/product");
};
