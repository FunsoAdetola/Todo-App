import React, { useState, useEffect, useContext } from "react";
import DashBoard from "../../containers/DashBoard/DashBoard";
import "./index.css";
import TodoForm from "../../components/TodoForm";
import TodoItem from "../../components/TodoItem";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../App";
import useFetch from "../../utils/useFetch";
import useAuth from "../../utils/useAuth";
import Select from "../../components/Select";
import LogOut from "../../components/LogOut";
import NavBar from "../../components/NavBar";
import {
  deleteItem,
  changeFilter,
  getTodos,
  filterNumber,
  toggleCheck,
  postTodoList,
} from "../../utils/functions";

export default function TodoList() {
  const [user, setUser] = useContext(UserContext);
  const [items, setItems, empty, setEmpty] = useFetch();
  const [filter, setFilter] = useState("all");

  if (!user.accesstoken) return <Redirect from="" to="user/login" noThrow />;
  return (
    <div>
      <NavBar />

      <DashBoard
        total={items.length}
        complete={filterNumber(items)}
        user={user}
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
            <div class="note">
              <input
                className="note-checkbox"
                type="checkbox"
                checked={checked}
                onClick={() => {
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
