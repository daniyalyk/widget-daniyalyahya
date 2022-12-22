import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Collapse,
  IconButton,
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
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  FirstPage,
  LastPage,
} from "@mui/icons-material";

interface IProps {
  columns: Array<GridColumn>;
  data: Array<any>;
}
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export const GridTable = ({ columns, data }: IProps) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const createData = (
    name: string,
    date: string,
    category: string,
    amount: string,
    created_at: string,
    account_id: string,
    item_id: string,
    type: string
  ) => {
    return {
      name,
      date,
      category,
      amount,
      created_at,
      history: [
        {
          account_id: account_id,
          item_id: item_id,
          type: type,
        },
      ],
    };
  };
  const rows = data?.map((item: any, index: number) => {
    return createData(
      item.name,
      item.date,
      item.category,
      item.amount,
      item.created_at,
      item.account_id,
      item.item_id,
      item.type
    );
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
  const TablePaginationActions = (props: TablePaginationActionsProps) => {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label='first page'
        >
          {theme.direction === "rtl" ? <LastPage /> : <FirstPage />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label='previous page'
        >
          {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label='next page'
        >
          {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label='last page'
        >
          {theme.direction === "rtl" ? <FirstPage /> : <LastPage />}
        </IconButton>
      </Box>
    );
  };

  const Row = (props: { row: ReturnType<any> }) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell align='center'>
            <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell align='center'>{row.name}</TableCell>
          <TableCell align='center'>{row.date}</TableCell>
          <TableCell align='center'>{row.category}</TableCell>
          <TableCell align='center'>{row.amount}</TableCell>
          <TableCell align='center'>{row.created_at}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align='center' style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box>
                <Table size='small' aria-label='purchases'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='center'>Account Id</TableCell>
                      <TableCell align='center'>Item Id</TableCell>
                      <TableCell align='center'>Type</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history?.map((historyRow: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell align='center'>{historyRow.account_id}</TableCell>
                        <TableCell align='center'>{historyRow.item_id}</TableCell>
                        <TableCell align='center'>{historyRow.type}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  };

  return (
    <>
      {columns ? (
        data ? (
          <TableContainer component={Paper}>
            <Table aria-label='collapsible table'>
              <TableHead>
                <TableRow>
                  <TableCell />
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
                  <Row key={index} row={row} />
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
