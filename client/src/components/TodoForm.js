import React, { useState, useContext } from "react";
import uuid from "uuid";
import "./TodoForm.css";
import { postTodoList } from "../utils/functions";
import { UserContext } from "../App";

export default function TodoForm({ passToParent }) {
  const [user] = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      itemId: uuid().toString(),
      checked: false,
      title: title,
      description: description,
      date: new Date(),
    };
    console.log(newItem);
    passToParent(newItem);
    setTitle("");
    setDescription("");
    console.log(newItem);
    postTodoList(newItem, user);
    if (!title || !description) {
      return;
    }
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="heading">
          <h1>Create Todo</h1>
        </div>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          autoComplete="off"
        />
        <textarea
          rows="1"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
          name="description"
          value={description}
        ></textarea>

        <button type="submit">
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}
