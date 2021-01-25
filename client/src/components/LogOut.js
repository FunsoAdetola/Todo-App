import React from "react";
import { useHistory } from "react-router-dom";
import { port } from "../utils/port";

export default function LogOut({ setUser }) {
  const history = useHistory();
  const logOut = async () => {
    await fetch(`${port}/user/logout`, {
      method: "POST",
    });
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
