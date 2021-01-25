const jwt = require("jsonwebtoken");

// const isAuth = (req) => {
//   const authorization = req.headers["authorization"];
//   if (!authorization) {
//     throw new Error("You need to login");
//   }
//   const token = authorization.split(" ")[1];
//   const { userId } = verify(token, process.env.ACCESS_TOKEN_SECRET);
//   return userId;
// };

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["auhorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.json({ message: "no access" });
    req.user = user;
    next();
  });
};

module.exports = {
  authenticateToken,
};
