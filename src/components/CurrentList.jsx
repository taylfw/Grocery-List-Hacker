import React from "react";
import "./CurrentList.css";
import { SingleIngredientCard } from ".";
import { storeList, getUserByUsername } from "../api";
import { useHistory } from "react-router-dom";

const CurrentList = ({ setList, list, user }) => {
  let history = useHistory();
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
    <div className="currentList-container" id="list-container">
      <div className="inner-container">
        <div className="current-title-container">
          <h1 className="current-title">Current List:</h1>
        </div>
        <div className="list-cards" id="list">
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
              const userObj = await getUserByUsername(user);
              await storeList(userObj.id, list);
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
              console.log(list);
              await list.map((item) => {
                if (item.selected) {
                  let el = list.indexOf(item);
                  console.log(item);
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
              console.log(list);
              print();
            } catch (error) {
              throw error;
            }
          }}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default CurrentList;
