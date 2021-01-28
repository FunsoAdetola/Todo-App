import React, { useState, useContext } from "react";
import DashBoard from "../../containers/DashBoard/DashBoard";
import "./index.css";
import TodoForm from "../../components/TodoForm";
import TodoItem from "../../components/TodoItem";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../App";
import useFetch from "../../utils/useFetch";
import Select from "../../components/Select";
import LogOut from "../../components/LogOut";
import NavBar from "../../components/NavBar";
import {
  deleteItem,
  changeFilter,
  getTodos,
  filterNumber,
  toggleCheck,
} from "../../utils/functions";

export default function TodoList() {
  const [accesstoken, firstName, items, setItems, empty] = useFetch();
  const [user, setUser] = useContext(UserContext);
  const [filter, setFilter] = useState("all");

  if (!accesstoken) return <Redirect from="" to="user/login" noThrow />;
  return (
    <div>
      <NavBar />

      <DashBoard
        total={items.length}
        complete={filterNumber(items)}
        user={firstName}
      />
      <div id="todo-list">
        <TodoForm
          passToParent={(newItem) => {
            setItems([...items, newItem]);
          }}
        />
        <Select changeFilter={changeFilter} setFilter={setFilter} />
        {getTodos(items, filter)
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .map(({ itemId, title, description, checked, date }) => (
            <div className="note" key={itemId}>
              <input
                className="note-checkbox"
                type="checkbox"
                checked={checked}
                onChange={() => {
                  toggleCheck(itemId, items, setItems, user);
                }}
              />
              <TodoItem
                className="note-content"
                items={items}
                setItems={setItems}
                id={itemId}
                title={title}
                description={description}
                checked={checked}
                date={date}
                deleteItem={(itemId) => {
                  deleteItem(itemId, setItems, items, user);
                }}
              />
            </div>
          ))}
        {empty && <div>You do not have any Todo List Items</div>}
      </div>
      <LogOut setUser={setUser} />
    </div>
  );
}
