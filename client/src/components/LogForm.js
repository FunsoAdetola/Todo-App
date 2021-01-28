import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import "./LogForm.css";
import { port } from "../utils/port";

export default function LogForm({ formTitle, LogIn, title }) {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [log] = useState(LogIn);
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${port}/user/${title}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        firstName,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message) {
          setError(result.message);
        }
        console.log(result);
        if (result.accesstoken) {
          setUser({
            email: result.email,
            accesstoken: result.accesstoken,
            firstName: result.firstName,
          });
          localStorage.setItem("accesstoken", result.accesstoken);
          localStorage.setItem("email", result.email);
          localStorage.setItem("firstName", result.firstName);
          history.push("/todo-list");
        } else {
          if (title === "sign-up") {
            history.push("/post-sign-up");
          }
          console.log(result.error);
        }
      });
  };

  return (
    <div className="form">
      <div className="home-logo">
        <Logo />
      </div>
      <h1>Welcome!</h1>
      <p>{formTitle} with your Email and password</p>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form className="login-signup" onSubmit={handleSubmit}>
        {log ? null : (
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
          />
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
        />
        <button type="submit">{formTitle}</button>
      </form>
    </div>
  );
}
