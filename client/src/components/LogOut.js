import React from "react";
import { useHistory } from "react-router-dom";

export default function LogOut({ setUser }) {
  const history = useHistory();
  const logOut = async () => {
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    setUser = {};
    history.push("/user/login");
  };

  return (
    <div>
      <button className="log-out" onClick={logOut}>
        LogOut
      </button>
    </div>
  );
}
