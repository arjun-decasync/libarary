const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const EmployeeModel = require("./models/Employee");

mongoose.connect(
  "mongodb+srv://arjunbindran:arjunbindran@cluster21.p68zgnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster21"
);

app.post("/login", (req, res) => {
  const { number, password } = req.body;
  EmployeeModel.findOne({ number: number }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Incorrect Password");
      }
    } else {
      res.json("User not found");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req, res)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
