require("dotenv").config();
const jwt = require("jsonwebtoken");

const createAccessToken = (email) => {
  const user = {
    email,
  };
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "7d" });
};

// const createRefreshToken = (email) => {
//   const user = {
//     email,
//   };
//   return jwt.sign(email, process.env.REFRESH_TOKEN_SECRET);
//   // {
//   //   expiresIn: "7d",
//   // }
// };

const sendToken = (req, res, accesstoken, firstName, email) => {
  res.json({
    accesstoken,
    email: email,
    firstName: firstName,
  });
};

module.exports = {
  createAccessToken,
  sendToken,
};
