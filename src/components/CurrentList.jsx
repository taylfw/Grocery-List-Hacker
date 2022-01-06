"use strict";
import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CurrentList.css";
import { HistoricalLists, SingleIngredientCard, HistoryButton } from ".";
import { storeList, getUserByUsername, getHistoricalLists } from "../api";
import { useHistory } from "react-router-dom";
import { getUser } from "../auth";

const CurrentList = ({ setList, list, user }) => {
  const [userId, setUserId] = useState(0);
  const [listHistory, setListHistory] = useState([]);

  const username = getUser();
  let history = useHistory();

  const handleUser = async () => {
    const user = await getUserByUsername(username);
    setUserId(user.id);
  };

  const handleHistory = async () => {
    const oldLists = await getHistoricalLists(userId);
    setListHistory(oldLists);
  };

  useEffect(() => {
    handleUser();
  }, []);

  useEffect(() => {
    handleHistory();
  }, [userId]);

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

  let today = new Date().toLocaleDateString();

  return (
    <div>
      <div className="currentList-container">
        <div className="button-panel">
          <button
            className="current-butt"
            onClick={async (event) => {
              event.preventDefault();
              try {
                const userObj = await getUserByUsername(user);

                await storeList(today, userObj.id, list);
              } catch (error) {
                throw error;
              }
            }}
          >
            Store List!
          </button>
          <button
            className="current-butt"
            onClick={async (event) => {
              event.preventDefault();
              try {
                await list.map((item) => {
                  if (item.selected) {
                    let el = list.indexOf(item);

                    list.splice(el, 1);
                    item.selected = false;
                  }
                });
                history.push("/");
                history.push("/my-info");
              } catch (error) {
                throw error;
              }
            }}
          >
            Delete Selected
          </button>
          <button
            className="current-butt"
            onClick={async (event) => {
              event.preventDefault();
              try {
                print();
              } catch (error) {
                throw error;
              }
            }}
          >
            Print
          </button>
        </div>
        <div className="mid-container">
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
          <Router>
            <div className="list-history">
              <HistoryButton history={listHistory} />
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default CurrentList;
