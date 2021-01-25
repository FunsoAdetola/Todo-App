import React from "react";
import { Link } from "react-router-dom";

export default function PostSignUp() {
  return (
    <div className="post-sign-up">
      Thank you for signing up!!!
      <Link className="post-sign-up-link" to="/user/login">
        <button>Click to login to your page</button>
      </Link>
    </div>
  );
}
