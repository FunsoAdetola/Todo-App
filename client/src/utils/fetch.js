import { port } from "./port";

export const fetch = async (method, body, path, authorization) => {
  const data = await fetch(`${port}/${path}/`, {
    method: method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: { authorization },
      //   `Basic ${user.email}:${user.accesstoken}`
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return data;
};
