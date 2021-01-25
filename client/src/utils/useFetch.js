import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import { port } from "./port";

export default function useFetch() {
  const [user, setUser] = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState(false);

  const fetchItems = async () => {
    await fetch(`${port}/todo-list/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${user.email}:${user.accesstoken}`,
      },
    }).then((response) => {
      if (response.status === 404) {
        setEmpty(true);
        console.log(response);
        return;
      }
      if (response.status === 200) {
        response.json().then((todos) => {
          if (todos.length <= 0) {
            setEmpty(true);
          } else {
            setEmpty(false);
          }
          const todoList = todos;
          setItems(todoList);
          console.log(todos);
          console.log(items);
        });
      }
    });
  };

  useEffect(() => {
    fetchItems();
    // items.length === 0 && setEmpty(true);
  }, []);

  return [items, setItems, empty, setEmpty];
}
