import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((preValue) => {
      return !preValue;
    });
  }

  const useStyles = makeStyles({
    tasks: {
      width: "50%",
      backgroundColor: "#ffea00",
      margin: "5px 0 0 0",
      border: "2px solid black",
      borderRadius: 8,
      height: 30,
      padding: "4px"
    },
    listUnchecked: {
      backgroundColor: "#ffea00",
      border: "3px solid black"
    },
    listChecked: {
      backgroundColor: "#4caf50"
    },
    crossStyle: {
      fontSize: "20px",
      paddingLeft: "240px"
    },
    boxStyle: {
      border: "1px solid black"
    }
  });

  const classes = useStyles();

  return (
    <div style={{ display: "flex" }} className={classes.tasks}>
      <div onClick={handleClick} style={{ display: "flex" }}>
        <input
          type="checkbox"
          value="Submit"
          onSubmit={handleClick}
          className={classes.boxStyle}
        />

        <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>
      <div
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        <span onClick={handleClick} className={classes.crossStyle}>
          &times;
        </span>
      </div>
    </div>
  );
}
