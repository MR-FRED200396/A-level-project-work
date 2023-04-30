import { useSelector } from "react-redux";

import TableCell from "@mui/material/TableCell";

import { PageLayout } from "../../components/PageLayout/PageLayout";
import { CustomTable } from "../../components/CustomTable/CustomTable";

import { getAllCurrenciesSelector } from "../../redux/selectors/currencySelectors";

export const Currency = () => {
  const currencies = useSelector(getAllCurrenciesSelector);

  const renderCurrencyRow = ({ id, name }) => (
    <>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
    </>
  );

  return (
    <PageLayout>
      <h1>Currencies</h1>
      <CustomTable
        headerItems={["ID", "Name"]}
        items={currencies}
        renderRow={renderCurrencyRow}
      />
    </PageLayout>
  );
};
