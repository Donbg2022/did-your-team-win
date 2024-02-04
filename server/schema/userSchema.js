import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fave_team: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("User", UserSchema)