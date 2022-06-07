import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import lightgreen from "@material-ui/core/colors/lightGreen";
import { ThemeProvider } from "@material-ui/styles";

export default function AddButton() {
  const theme = createMuiTheme({
    palette: {
      primary: lightgreen[A200]
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        <span> Add new task </span>
      </Button>
    </ThemeProvider>
  );
}
