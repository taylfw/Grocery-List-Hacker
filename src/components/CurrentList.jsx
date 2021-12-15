import React from "react";
import "./CurrentList.css";
import { SingleIngredientCard } from ".";

const CurrentList = ({ setList, list }) => {
  function compare(a, b) {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  }
  list.sort(compare);
  return (
    <div className="currentList-container">
      <div className="inner-container">
        <div className="current-title-container">
          <h1 className="current-title">Current List:</h1>
        </div>
        <div className="list-cards">
          {list.map((currentIng) => {
            return <SingleIngredientCard ingredient={currentIng} />;
          })}
        </div>
      </div>
      <div className="button-panel">
        <button
          className="current-butt"
          onClick={async (event) => {
            event.preventDefault();
            try {
              console.log(list);
            } catch (error) {
              throw error;
            }
          }}
        >
          Store List!
        </button>
        <button className="current-butt">Print</button>
      </div>
    </div>
  );
};

export default CurrentList;
