import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Todo2e from "./Todo2e";

export default function Todo2() {
  const [Todo, setTodo] = useState("");
  const [Item, setItem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const showTodo2 = () => {
    setItem([...Item, Todo]);
    setTodo("");
  };

  // const removeItem = (id)=>{
  //     setItem(Item.filter((arrElem, index)=>{
  //             return id!=index;
  //     }))
  // }

  return (
    <>
      <div className="container">
        <h1>To Do List</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter todo..."
            onChange={handleChange}
            value={Todo}
          />
        </form>
        <button type="submit" onClick={showTodo2}>
          <AddIcon />
        </button>
      </div>
      <div className="container">
        <ol>
          {Item.map((itemval, index) => {
            return (
              <Todo2e
                text={itemval}
                key={index}
                id={index}
                // onSelect={removeItem}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}
