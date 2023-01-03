import React from "react";
import { TableCell, TableRow } from "@mui/material";

interface IProps {
  row: ReturnType<any>;
}
export const GridTableRow = (props: IProps) => {
  const { row } = props;

  return (
    <React.Fragment>
      <TableRow>
        <TableCell align='center'>{row.name}</TableCell>
        <TableCell align='center'>{row.date}</TableCell>
        <TableCell align='center'>{row.category}</TableCell>
        <TableCell align='center'>{row.amount}</TableCell>
        <TableCell align='center'>{row.created_at}</TableCell>
      </TableRow>
    </React.Fragment>
  );
};
