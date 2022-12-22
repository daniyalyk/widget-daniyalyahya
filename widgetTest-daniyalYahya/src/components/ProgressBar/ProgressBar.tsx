import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const ProgressBar = () => {
  return (
    <Box sx={{ display: "flex" }} justifyContent='center' margin={"10px"}>
      <CircularProgress />
    </Box>
  );
};
