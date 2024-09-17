const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
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
});
var EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;
