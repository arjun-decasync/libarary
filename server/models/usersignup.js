// const mangoose = require("mongoose");

// const usersignupSchema = new mangoose.Schema({
//   name: String,
//   mobile: Number,
//   password: String,
//   confirmPassword: String,
// });

// const UsersignupModel = mangoose.model("Usersignup", usersignupSchema);

// module.exports = UsersignupModel;

const mongoose = require("mongoose");



let Schema = mongoose.Schema;

const usersignupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});
var UsersignupModel = mongoose.model("registration", usersignupSchema);
module.exports = UsersignupModel;
