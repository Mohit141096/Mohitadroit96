import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TodoItem from "./todoItem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "lightgreen",
    border: "4px solid",
    borderColor: "vida loca",
    borderRadius: 8,
    color: "white",
    height: 50,
    padding: "5 20px",
    fontSize: "10px",
    color: "grey",
    marginLeft: "10px"
  },
  ulStyles: {
    margin: 0,
    padding: 0,
    listStyle: "none"
  },
  bodyStyle: {
    height: "100vh",
    margin: 0,
    padding: 0
  },
  formStyle: {
    border: "2px solid black",
    borderRadius: "5px",
    height: 40,
    width: "260px",
    padding: "10px"
  },
  inputStyle: {
    border: 0,
    borderBottom: "2px solid black",
    margin: "3px"
  },
  hrStyle: {
    border: 0,
    borderBottom: "2px dotted black",
    width: "300px",
    margin: "15px 0 15px 0"
  }
});

export default function TaskList() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const classes = useStyles();
  return (
    <div className={classes.bodyStyle}>
      <h1>TaskList</h1>

      <div style={{ display: "flex" }} className={classes.formStyle}>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          className={classes.inputStyle}
        />
        <Button className={classes.root} onClick={handleClick}>
          <span> Add new task </span>
        </Button>
      </div>

      <hr className={classes.hrStyle} />
      <div>
        <ul className={classes.ulStyles}>
          {items.map((addeditem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={addeditem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
