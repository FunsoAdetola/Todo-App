import React, { useState, useEffect } from "react";
import { port } from "./port";
import { getAccessToken, sendAccessToken } from "./accessToken";

export function useAuth() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const [accesstoken, email, firstName] = getAccessToken();

  const checkAccessToken = async () => {
    await fetch(`${port}/user/access_token`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Basic ${email}:${accesstoken}`,
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
          sendAccessToken(result);
          setLoggedIn(true);
        }
        return result;
      });
  };

  useEffect(() => {
    checkAccessToken();

    setUser({ email, accesstoken, firstName });
    console.log(user);
  }, []);
  return [user, setUser, loading, loggedIn];
}
