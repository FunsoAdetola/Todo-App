export const checkRefreshToken = async (port, setUser) => {
  await fetch(`${port}/refresh_token`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.accesstoken) {
        setUser(result);
      }
      return result;
    });
};
