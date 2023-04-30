import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

import { PageLayout } from "../../components/PageLayout/PageLayout";
import { CustomTable } from "../../components/CustomTable/CustomTable";

import {
  getAllProductsAction,
  selectProduct,
} from "../../redux/slices/productsSlice";
import { getAllProductsByCurrencySelector } from "../../redux/selectors/productSelectors";

export const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector(getAllProductsByCurrencySelector);

  const renderProductRow = ({ id, name, category, amount, formattedPrice }) => (
    <>
      <TableCell>{name}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{formattedPrice}</TableCell>
      <TableCell>
        <Button onClick={() => dispatch(selectProduct(id))}>Buy</Button>
      </TableCell>
    </>
  );

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, []);

  return (
    <PageLayout>
      <h1>Products</h1>
      <CustomTable
        headerItems={["Name", "Category", "Amount", "Price", "Action"]}
        items={products}
        renderRow={renderProductRow}
        isPagination
      />
    </PageLayout>
  );
};
