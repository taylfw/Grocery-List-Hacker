import React, { useEffect, useState } from "react";

import "./HistoryButton.css";

const HistoryButton = ({ history }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="history-container">
      <h1 className="current-title">Previous Lists:</h1>
      <div className="history-button-panel">
        {history.length
          ? history.map((hiz) => {
              return (
                <div>
                  <button
                    className="current-butt"
                    onClick={async (event) => {
                      event.preventDefault();

                      try {
                        console.log(history);
                        history.length
                          ? history.map((el) => {
                              el.active = false;
                            })
                          : null;

                        active ? (hiz.active = true) : null;

                        console.log(hiz);
                      } catch (error) {
                        console.log(error);
                        throw error;
                      }
                    }}
                  >
                    {hiz.date}
                  </button>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default HistoryButton;
