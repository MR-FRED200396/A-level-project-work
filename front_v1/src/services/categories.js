import Axios from "./api";

export const getAllCategories = async () => {
  return await Axios.get("/category");
};
