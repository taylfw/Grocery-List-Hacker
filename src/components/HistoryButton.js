import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./HistoryButton.css";

const HistoryButton = ({ history, active, onRetrieval }) => {
  return (
    <div className="history-container">
      <h1 className="current-title">Previous Lists:</h1>

      <div className="history-button-panel">
        {history.length
          ? history.map((hiz) => {
              return (
                <Link
                  to={`/history/:${hiz.id}`}
                  key={hiz.id}
                  className="current-butt"
                  onClick={async (event) => {
                    event.preventDefault();

                    try {
                      history.length
                        ? history.map((el) => {
                            el.active = false;
                          })
                        : null;

                      active ? (hiz.active = true) : null;
                      active ? onRetrieval(hiz) : null;
                    } catch (error) {
                      console.log(error);
                      throw error;
                    }
                  }}
                >
                  {hiz.date}
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default HistoryButton;
