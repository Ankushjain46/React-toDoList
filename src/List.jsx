import React from "react";

const List = (props) => {
  return (
    <>
      <div className="toDoStyle">
        <i
          className="fa fa-times"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li> {props.text}</li>
      </div>
    </>
  );
};

export default List;
