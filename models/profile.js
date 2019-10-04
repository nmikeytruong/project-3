const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  imageurl: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  gender: { type: String, required: true },
  lookingFor: { type: String, required: true },
  interests: String,
  aboutMe: String,
  date: { type: Date, default: Date.now }
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
