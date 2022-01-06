import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./HistoryButton.css";

const HistoryButton = ({ history }) => {
  console.log(history);

  return (
    <div className="history-container">
      <h1 className="current-title">Previous Lists:</h1>
      <div className="history-button-panel">
        {history.length
          ? history.map((hiz) => {
              return <button className="current-butt">{hiz.date}</button>;
            })
          : null}
      </div>
    </div>
  );
};

export default HistoryButton;
