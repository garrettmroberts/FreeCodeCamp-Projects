const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortId = require("shortid")

const userSchema = new Schema({
  _id: { type: String, unique: true, default: shortId.generate },
  username: String,
  workouts: [
    {
      description: String,
      duration: Number,
      date: {}
    }
  ]
}, {
  versionKey: false,
  _id: false
});

const User = mongoose.model("User", userSchema);

module.exports = User;