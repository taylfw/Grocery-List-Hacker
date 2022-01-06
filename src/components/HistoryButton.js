import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./HistoryButton.css";

const HistoryButton = ({ history }) => {
  console.log(history);

  return (
    <div>
      <h1>Frank rules</h1>

      {history.map((hiz) => {
        return (
          <Route>
            <button className="current-butt">{hiz.date}</button>
          </Route>
        );
      })}
    </div>
  );
};

export default HistoryButton;
