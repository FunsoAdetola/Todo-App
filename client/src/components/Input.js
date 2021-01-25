import React from "react";

export default function Input({ setChange, type, name, value, placeholder }) {
  return (
    <input
      className="sign-up-input"
      onChange={(e) => setChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      //   autoComplete="off"
    />
  );
}
