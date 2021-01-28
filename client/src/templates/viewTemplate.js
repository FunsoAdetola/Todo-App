import React from "react";
import { ReactComponent as Edit } from "../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../assets/icons/delete.svg";

export default function ViewTemplate({
  id,
  checked,
  description,
  title,
  setEdit,
  deleteItem,
}) {
  return (
    <div
      className="view-note"
      key={id}
      style={checked ? { textDecoration: "line-through" } : null}
    >
      <div className="note-title">
        {title}
        <div className=" view-btn-group">
          <button onClick={() => setEdit(id)} type="button" className="btn">
            <Edit />
          </button>
          <button type="button" className="btn" onClick={() => deleteItem(id)}>
            <Delete />
          </button>
        </div>
      </div>
      <div className="note-description">{description}</div>
    </div>
  );
}
