import React, { useEffect, useState } from "react";
import { SingleIngredientCard } from ".";
import "./HistoricalLists.css";

const HistoricalLists = ({ history }) => {
  const [listHistory, setListHistory] = useState([]);
  const historicalArr = history.historicalLists;

  return (
    <div className="historical-lists-container">
      <h1 className="historical-lists">Saved List</h1>
      <div className="list-cards" id="list">
        {historicalArr.map((currentIng) => {
          return <SingleIngredientCard ingredient={JSON.parse(currentIng)} />;
        })}
      </div>
    </div>
  );
};

export default HistoricalLists;
