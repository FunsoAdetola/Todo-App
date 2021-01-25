import React, { useState, useEffect } from "react";
import { port } from "./port";

export function useAuth() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const checkRefreshToken = async () => {
    await fetch(`${port}/refresh_token`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTimeout(() => {
          result && setLoading(false);
        }, 2000);
        if (result.accesstoken) {
          setUser(result);
          setLoggedIn(true);
        }
        return result;
      });
  };

  useEffect(() => {
    checkRefreshToken();
    console.log(user);
  }, [user]);
  return [user, setUser, loading, loggedIn];
}
