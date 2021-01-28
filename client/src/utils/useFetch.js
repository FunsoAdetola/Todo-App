import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import { port } from "./port";
import { getAccessToken } from "./accessToken";

export default function useFetch() {
  const [user, setUser] = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState(false);

  const [accesstoken, email, firstName] = getAccessToken();

  const fetchItems = async () => {
    await fetch(`${port}/todo-list/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${email}:${accesstoken}`,
      },
    }).then((response) => {
      if (response.status === 404) {
        setEmpty(true);
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
        });
      }
    });
  };

  useEffect(() => {
    fetchItems();
    setUser({ accesstoken, email, firstName });
  }, []);

  return [accesstoken, firstName, items, setItems, empty];
}
