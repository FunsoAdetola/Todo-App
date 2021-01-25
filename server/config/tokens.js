require("dotenv").config();
const jwt = require("jsonwebtoken");

const createAccessToken = (email) => {
  const user = {
    email,
  };
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

const createRefreshToken = (email) => {
  const user = {
    email,
  };
  return jwt.sign(email, process.env.REFRESH_TOKEN_SECRET);
  // {
  //   expiresIn: "7d",
  // }
};

const sendToken = (req, res, accesstoken, refreshtoken, firstName, email) => {
  res.cookie("refreshtoken", refreshtoken, {
    httpOnly: true,
    path: "/refresh_token",
    sameOrigin: "none",
  });
  res.json({
    accesstoken,
    email: email,
    firstName: firstName,
  });
};

const sendRefreshToken = (response, refreshtoken) => {
  response.cookie("refreshtoken", refreshtoken, {
    httpOnly: true,
    path: "/refresh_token",
  });
  return;
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendToken,
  sendRefreshToken,
};
