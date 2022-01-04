import React, { useEffect, useState } from "react";
import { SingleIngredientCard } from ".";
import "./HistoricalLists.css";

const HistoricalLists = ({ history }) => {
  console.log(history);
  return (
    <div className="historical-lists-container">
      <h1 className="historical-lists">date goes here</h1>
      <div className="list-cards" id="list">
        {/* {history.map((currentIng) => {
          return <SingleIngredientCard ingredient={JSON.parse(currentIng)} />;
        })} */}
      </div>
    </div>
  );
};

export default HistoricalLists;
