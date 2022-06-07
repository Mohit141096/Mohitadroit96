import React from "react";
import { makesStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makesStyles({
  root: {
    background: "green",
    borderColor: "vidaloca",
    borderRadius: 3,
    color: "white",
    height: 30,
    padding: "0 30px"
  }
});

export default functionStylelist() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}