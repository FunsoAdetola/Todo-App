import React from "react";
import "./DashBoard.css";
import { getTime } from "../../utils/time";

export default function DashBoard({ complete, total, user }) {
  return (
    <div className="dashboard">
      <div className="dashboard-div">
        <h2> Hello {user.toUpperCase()}</h2>
        <p>{getTime()}</p>
        <progress max="100" value={(complete / total) * 100}></progress>
        <div className="tasks">
          <div className="completed">
            <span className="number">{complete}</span>
            <span>Completed</span>
          </div>
          <div className="active">
            <span className="number">{total - complete}</span>
            <span>Active</span>
          </div>
          <div className="total">
            <span className="number">{total}</span>
            <span>Total</span>
          </div>
        </div>
      </div>
      <a className="dashboard-link" href="#todo-list">
        {" "}
        See your Todo List
      </a>
    </div>
  );
}
