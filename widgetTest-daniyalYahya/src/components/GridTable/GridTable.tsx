import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Paper,
  Typography,
} from "@mui/material";
import { GridTableRow, TablePaginationActions } from "./_";
interface IProps {
  columns: Array<GridColumn>;
  data: Array<any>;
}

export const GridTable = ({ columns, data }: IProps) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const createData = (
    name: string,
    date: string,
    category: string,
    amount: string,
    created_at: string
  ) => {
    return {
      name,
      date,
      category,
      amount,
      created_at,
    };
  };
  const rows = data?.map((item: any, index: number) => {
    return createData(item.name, item.date, item.category, item.amount, item.created_at);
  });
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {columns ? (
        data ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {columns?.map((item: any, index: number) => {
                    return (
                      <TableCell align='center' key={index}>
                        {item.label}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
                )?.map((row: any, index: number) => (
                  <GridTableRow key={index} row={row} />
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                    colSpan={5}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        ) : (
          <Typography>No Data to Display</Typography>
        )
      ) : (
        <Typography>No Data to Display</Typography>
      )}
    </>
  );
};
