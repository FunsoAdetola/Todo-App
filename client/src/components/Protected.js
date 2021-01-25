import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import { port } from "../utils/port";

export default function Protected() {
  const [user] = useContext(UserContext);
  const [content, setContent] = useState("You need to Login");
  useEffect(() => {
    async function fetchProtected() {
      const result = await await fetch(`${port}/user/protected`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${user.accesstoken}`,
        },
      }).json();
      if (result.data) {
        setContent(result.data);
      }
    }
    fetchProtected();
  }, [user]);

  return <div>{content}</div>;
}
