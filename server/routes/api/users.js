const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const {
  createAccessToken,
  createRefreshToken,
  sendToken,
} = require("../../config/tokens");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

// User model
const User = require("../../models/User");

// @route post api
//@desc register username, email and password

router.post("/sign-up", async (req, res) => {
  const { email, firstName, password } = req.body;

  User.findOne({ email: email }, (err, userExist) => {
    if (userExist) {
      res.status(403);
      res.json({
        message: "User already exists",
      });
    } else {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        console.log(hash);
        if (!err) {
          User.create({
            email,
            firstName,
            password: hash,
          });
          res.status(200);
          res.json({ message: "New User Created" });
        } else {
          res.json(`${err}`);
        }
      });
    }
  });
});

// @route post api
//@desc login with email and password

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (!user) {
      res.status(403);
      res.send({
        message: "User does not exist",
      });
      return;
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (!err) {
          if (result === false) {
            res.status(403);
            res.send({
              message: "Password incorrect",
            });
            return;
          } else {
            // creating access and refresh tokens
            const accesstoken = createAccessToken(user.email);
            const refreshtoken = createRefreshToken(user.email);

            User.updateOne(
              { email: user.email },
              { $set: { refreshToken: refreshtoken } },
              (err, updatedUser) => {
                console.log(updatedUser);
              }
            );
            sendToken(
              req,
              res,
              accesstoken,
              refreshtoken,
              user.firstName,
              user.email
            );
            return;
          }
        } else {
          res.send(`${err}`);
        }
      });
    }
  });
});

// @route post api
//@desc logout user

router.post("/logout", (_req, res) => {
  res.clearCookie("refreshtoken", { path: "/refresh_token" });
  return res.json({
    message: "Logged Out",
  });
});

module.exports = router;
