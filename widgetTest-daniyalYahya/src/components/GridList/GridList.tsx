import * as React from "react";
import { List, ListItem, Divider, ListItemText, Typography } from "@mui/material";
interface IProps {
  columns: Array<GridColumn>;
  data: Array<any>;
}

const SingleListItem = (col: any, primaryText: string, secondaryText: string) => {
  return (
    <>
      <ListItem alignItems='center'>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component='span'
                variant='body2'
                color='text.primary'
                marginRight='1rem'
                fontSize={"0.75rem"}
              >
                {col[0].label}:
              </Typography>
              <Typography
                sx={{ display: "inline" }}
                component='span'
                variant='body2'
                color='text.secondary'
                marginRight='1rem'
                fontSize={"0.5rem"}
              >
                {primaryText}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component='span'
                variant='body2'
                color='text.primary'
                marginRight='1rem'
                fontSize={"0.75rem"}
              >
                {col[1].label}:
              </Typography>
              <Typography
                sx={{ display: "inline" }}
                component='span'
                variant='body2'
                color='text.secondary'
                marginRight='1rem'
                fontSize={"0.5rem"}
              >
                {secondaryText}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </>
  );
};
export const GridList = ({ columns, data }: IProps) => {
  console.log({ columns }, { data });
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {data?.map((item: any, index: number) => {
        return SingleListItem(columns, item.name, item.date);
      })}
    </List>
  );
};
