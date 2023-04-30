import PropTypes from "prop-types";

import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import Pagination from "@mui/material/Pagination";

import { usePagination } from "../../hooks/usePagination";

export const CustomTable = ({
  headerItems = [],
  items = [],
  renderHeader,
  renderRow,
  itemsPerPage = 5,
  isPagination = false,
}) => {
  const [{ currentPage, currentItems, totalPages }, { handleChangePage }] =
    usePagination({ itemsPerPage, items });

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {renderHeader
                ? renderHeader(headerItems)
                : headerItems.map((headerItem, index) => (
                    <TableCell key={index}>{headerItem}</TableCell>
                  ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((item, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={index}
              >
                {renderRow(item)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isPagination && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
        />
      )}
    </>
  );
};

CustomTable.propTypes = {
  headerItems: PropTypes.array,
  items: PropTypes.array,
  renderHeader: PropTypes.func,
  renderRow: PropTypes.func,
  itemsPerPage: PropTypes.number,
  isPagination: PropTypes.bool,
};
