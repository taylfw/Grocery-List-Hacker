import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./HistoryButton.css";

const HistoryButton = ({ date }) => {
  console.log(date);

  return (
    <div>
      <Route path="/history/:id" className="nav-button">
        {date}
      </Route>
    </div>
  );
};

export default HistoryButton;
