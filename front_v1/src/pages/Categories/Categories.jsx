import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TableCell from "@mui/material/TableCell";

import { PageLayout } from "../../components/PageLayout/PageLayout";
import { CustomTable } from "../../components/CustomTable/CustomTable";

import { getAllCategoriesAction } from "../../redux/slices/categoriesSlice";
import { getAllCategoriesSelector } from "../../redux/selectors/categoriesSelectors";

export const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector(getAllCategoriesSelector);

  const renderCategoryRow = ({ id, name }) => (
    <>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
    </>
  );

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);

  return (
    <PageLayout>
      <h1>Categories</h1>
      <CustomTable
        headerItems={["ID", "Name"]}
        items={categories}
        renderRow={renderCategoryRow}
        isPagination
      />
    </PageLayout>
  );
};
