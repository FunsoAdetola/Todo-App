const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  userId: String,
  todos: [
    {
      itemId: String,
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      checked: Boolean,
      date: {
        type: Date,
      },
    },
  ],
});

module.exports = Item = mongoose.model("item", ItemSchema);
