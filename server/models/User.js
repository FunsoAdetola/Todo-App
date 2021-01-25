const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  password: String,
  refreshToken: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = User = mongoose.model("user", UserSchema);
