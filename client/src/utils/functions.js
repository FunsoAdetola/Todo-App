import { port } from "./port";

export async function checkRefreshToken(setUser) {
  const result = await fetch(`${port}/user/refresh_token`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.accesstoken) {
        setUser({
          accesstoken: result.accesstoken,
        });
      }
    });
}

// add new items to database
export const postTodoList = (newItem, user) => {
  fetch(`${port}/todo-list/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${user.email}:${user.accesstoken}`,
    },
    body: JSON.stringify(newItem),
  }).then(() => {});
};

//delete items from todo list
export const deleteItem = (id, setItems, items, user) => {
  setItems(items.filter((item) => item.itemId !== id));
  fetch(`${port}/todo-list/:${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${user.email}:${user.accesstoken}`,
    },
  }).then((response) => response.json());
};

//toggle checked items in todolist
export const toggleCheck = (itemId, items, setItems, user) => {
  const itemIndex = items.findIndex((item) => item.itemId === itemId);
  const newItemList = [...items];
  newItemList[itemIndex].checked = !newItemList[itemIndex].checked;
  setItems(newItemList);
  console.log(newItemList);
  fetch(`${port}/todo-list/toggle/${itemId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${user.email}:${user.accesstoken}`,
    },
    body: JSON.stringify(newItemList),
  }).then(() => {});
};

//@ filter active, complete, and total tasks
export const changeFilter = (newFilter, setFilter) => {
  setFilter(newFilter);
};

//@ filter active, complete, and total tasks
export const getTodos = (items, filter) => {
  return items.filter((item) => {
    if (filter === "all") {
      return item;
    }
    if (filter === "completed") {
      return item.checked;
    } else {
      return !item.checked;
    }
  });
};

//@ change the number of tasks
export const filterNumber = (items) => {
  const count = items.filter((item) => item.checked === true).length;
  return count;
};

//edit todo list items
export const postEdited = (id, user, items, setItems, editedItem) => {
  const itemIndex = items.findIndex((item) => item.itemId === id);
  items.splice(itemIndex, 1);
  const newItemList = [...items, editedItem];
  setItems(newItemList);

  fetch(`${port}/todo-list/edit/:${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItemList),
  }).then((response) => response.json());
};
