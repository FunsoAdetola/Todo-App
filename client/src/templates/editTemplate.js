import React from "react";

export default function EditTemplate({
  id,
  checked,
  description,
  title,
  cancelEdit,
  submitEdited,
  setEditedDescription,
  setEditedTitle,
}) {
  return (
    <div key={id}>
      <form className="edit-form" onSubmit={(e) => submitEdited(id, e)}>
        <div className="note-title">
          <input
            onChange={(e) => setEditedTitle(e.target.value)}
            type="text"
            value={title}
          />
        </div>
        <textarea
          onChange={(e) => setEditedDescription(e.target.value)}
          type="text"
          value={description}
        ></textarea>
        <div className="btn-group">
          <button
            onClick={cancelEdit}
            type="button"
            className="btn todo-cancel"
          >
            Cancel
          </button>
          <button type="submit" className="btn todo-edit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
