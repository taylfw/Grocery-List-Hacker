import React from "react";
import "./CurrentList.css";

const CurrentList = ({ setList, list }) => {
  return (
    <div className="currentList-container">
      <h1>Hello</h1>
      <button
        onClick={async (event) => {
          event.preventDefault();
          try {
            console.log(list);
          } catch (error) {
            throw error;
          }
        }}
      >
        Press Me!
      </button>
    </div>
  );
};

export default CurrentList;
