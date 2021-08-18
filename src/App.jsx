import React, { useState } from "react";
import List from "./List";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const newInput = (event) => {
    setInputList(event.target.value);
  };

  const clickItems = () => {
    setItems((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    // console.log("Clicked");
    setItems((olditems) => {
      return olditems.filter((ele, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <h1> ToDo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add an items"
            value={inputList}
            onChange={newInput}
          />
          <button onClick={clickItems}> + </button>

          <div className="sc">
            <ol>
              {items.map((curVal, index) => {
                return (
                  <List
                    text={curVal}
                    key={index}
                    id={index}
                    onSelect={deleteItems}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
