import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
});

const User = mongoose.model("User", userSchema);

export default User;