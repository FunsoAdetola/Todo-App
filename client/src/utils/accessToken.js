export const getAccessToken = () => {
  const accesstoken = localStorage.getItem("accesstoken");
  const email = localStorage.getItem("email");
  const firstName = localStorage.getItem("firstName");
  return [accesstoken, email, firstName];
};

export const sendAccessToken = (result) => {
  localStorage.setItem("accesstoken", result.accesstoken);
  localStorage.setItem("email", result.email);
  localStorage.setItem("firstName", result.firstName);
};
