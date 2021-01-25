import React from "react";

export default function Select({ changeFilter, setFilter }) {
  return (
    <select
      className="custom-select"
      onChange={(e) => changeFilter(e.target.value, setFilter)}
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="Active">Active</option>
    </select>
  );
}
