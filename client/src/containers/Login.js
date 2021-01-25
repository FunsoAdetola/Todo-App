import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import Form from "../components/LogForm";

export default function Login() {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <Form LogIn={true} formTitle="Log In" title="login" />
      <div className="login-bottom-text">
        No account?
        <Link className="bottom-link" to="/user/sign-up">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
