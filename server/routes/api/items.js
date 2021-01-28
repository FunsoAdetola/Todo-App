const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Item model
const Item = require("../../models/Item");

// User model
const User = require("../../models/User");

// @route GET api/items
//@desc Get all items
//@access public

router.get("/", (req, res) => {
  const { authorization } = req.headers;
  const [, token] = authorization.split(" ");
  const [email, accesstoken] = token.split(":");

  User.findOne({ email }, (err, user) => {
    if (!user) {
      res.status(403);
      res.json({
        message: "Invalid user",
      });
      return;
    }
    const id = user._id.toString();
    Item.findOne({ userId: id }, (err, item) => {
      if (item) {
        res.json(item.todos);
        return;
      } else {
        res.status(404);
        res.json({
          message: "No todo items found",
        });
      }
    });
  });
});

// @route Post api/items
//@desc Create an item
//@access public

router.post("/", async (req, res) => {
  const { authorization } = req.headers;
  const [, token] = authorization.split(" ");
  const [email, accesstoken] = token.split(":");
  const todoList = req.body;

  await User.findOne({ email }, (err, user) => {
    const id = user._id.toString();
    Item.findOne({ userId: id }, (err, item) => {
      if (!item) {
        Item.create({
          userId: id,
          todos: todoList,
        });
      } else {
        item.todos.push(todoList);
        item.save();
      }
    });
  });
});

// @route delete api/items/:id
//@desc delete an item
//@access public

router.delete("/:itemId", (req, res) => {
  const id = req.params.itemId;
  const [a, idd] = id.split(":");
  console.log(idd);
  console.log(id);
  const itemDeleted = Item.updateOne(
    { todos: { $elemMatch: { itemId: idd } } },
    { $pull: { todos: { itemId: idd } } }
  ).exec();
  if (itemDeleted) {
    res.json({
      message: "successfully deleted",
    });
  }
});

// @route toggle api/items/:id
//@desc toggle an item checked or !checked
//@access public

router.put("/toggle/:itemId", (req, res) => {
  Item.updateOne(
    { todos: { $elemMatch: { itemId: req.params.itemId } } },
    { $set: { todos: req.body } },
    (err, updated) => {
      if (updated) {
        res.send({
          message: "updated",
        });
      }
    }
  );
});

// @route put edit api/items/:id
//@desc edit an item
//@access public

router.put("/edit/:itemId", (req, res) => {
  Item.findOneAndUpdate(
    { todos: { $elemMatch: { itemId: req.params.itemId } } },
    { $set: { todos: req.body } },
    (err, updated) => {
      if (updated) {
        res.send({
          message: "updated",
        });
      }
    }
  );
});
module.exports = router;
