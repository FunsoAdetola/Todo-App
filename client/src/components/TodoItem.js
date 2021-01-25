import React, { useState } from "react";
import ViewTemplate from "../templates/viewTemplate";
import EditTemplate from "../templates/editTemplate";
import { postEdited } from "../utils/functions";

export default function TodoItem({
  items,
  setItems,
  id,
  title,
  description,
  checked,
  date,
  user,
  setEdit,
  deleteItem,
  editParent,
}) {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const submitEdited = (id, e) => {
    e.preventDefault();
    const editedItem = {
      itemId: id,
      title: editedTitle,
      description: editedDescription,
      checked: checked,
      date: date,
    };
    console.log(editedItem);
    postEdited(id, user, items, setItems, editedItem);
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditTemplate
          id={id}
          title={editedTitle}
          description={editedDescription}
          checked={checked}
          cancelEdit={(id) => setEditing(false)}
          submitEdited={submitEdited}
          setEditedDescription={setEditedDescription}
          setEditedTitle={setEditedTitle}
        />
      ) : (
        <ViewTemplate
          id={id}
          title={title}
          description={description}
          checked={checked}
          setEdit={(id) => setEditing(true)}
          deleteItem={deleteItem}
        />
      )}
    </div>
  );
}
